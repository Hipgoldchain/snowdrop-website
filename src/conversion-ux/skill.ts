/**
 * ConversionUXSkill — Core Skill Module
 *
 * Operational logic for the iterative conversion audit loop.
 * This module defines the workflow structure. In V1, the audit
 * itself is performed by an AI agent using the rubric and types
 * as a structured framework. In future versions, automated
 * scoring can supplement or replace heuristic judgement.
 *
 * Architecture:
 *   analyse → evaluate → improve → verify → repeat
 */

import type {
  AuditResult,
  ChangeHypothesis,
  ChangeRecord,
  ConversionData,
  ConversionIssue,
  ConversionUXConfig,
  DataRequest,
  DimensionScore,
  LearningRecord,
  PageDefinition,
  RubricResult,
} from "./types";
import { defaultConfig } from "./rubric";

// ---------------------------------------------------------------------------
// Skill state
// ---------------------------------------------------------------------------

interface SkillState {
  config: ConversionUXConfig;
  pages: PageDefinition[];
  audits: AuditResult[];
  learningLog: LearningRecord[];
  conversionData: ConversionData | null;
  currentIteration: number;
}

function createInitialState(
  config: ConversionUXConfig = defaultConfig
): SkillState {
  return {
    config,
    pages: [],
    audits: [],
    learningLog: [],
    conversionData: null,
    currentIteration: 0,
  };
}

// ---------------------------------------------------------------------------
// Workflow steps
// ---------------------------------------------------------------------------

/**
 * Step 1: Understand the page.
 * Define the conversion context before auditing.
 */
function understandPage(page: PageDefinition): PageDefinition {
  return page;
}

/**
 * Step 2: Score against rubric.
 * Returns a structured score with reasoning per dimension.
 */
function scorePage(
  dimensions: DimensionScore[],
  page: string,
  pageType: PageDefinition["pageType"],
  version: string
): RubricResult {
  const totalScore = dimensions.reduce((sum, d) => sum + d.score, 0);
  const maxPossible = dimensions.reduce((sum, d) => sum + d.maxScore, 0);

  return {
    totalScore,
    maxPossible,
    dimensions,
    timestamp: new Date().toISOString(),
    version,
    page,
    pageType,
  };
}

/**
 * Step 3: Identify and rank issues.
 * Priority = expectedImpact × confidence ÷ effort
 */
function rankOpportunities(issues: ConversionIssue[]): ConversionIssue[] {
  const severityWeight: Record<string, number> = {
    critical: 4,
    high: 3,
    medium: 2,
    low: 1,
  };
  const confidenceWeight: Record<string, number> = {
    high: 3,
    medium: 2,
    low: 1,
  };
  const effortWeight: Record<string, number> = {
    trivial: 4,
    small: 3,
    medium: 2,
    large: 1,
  };

  return [...issues].sort((a, b) => {
    const scoreA =
      severityWeight[a.severity] *
      confidenceWeight[a.confidence] *
      effortWeight[a.implementationEffort];
    const scoreB =
      severityWeight[b.severity] *
      confidenceWeight[b.confidence] *
      effortWeight[b.implementationEffort];
    return scoreB - scoreA;
  });
}

/**
 * Step 4: Generate change hypotheses from ranked issues.
 */
function generateHypotheses(
  rankedIssues: ConversionIssue[]
): ChangeHypothesis[] {
  return rankedIssues.map((issue, i) => ({
    id: `hyp-${issue.id}`,
    problem: issue.description,
    change: issue.suggestedChange,
    hypothesis: `Addressing "${issue.title}" should improve the ${issue.rubricDimension} dimension score.`,
    metricOnceAvailable: `Track: ${issue.rubricDimension} related metrics`,
    confidence: issue.confidence,
    priority: rankedIssues.length - i,
    issueIds: [issue.id],
  }));
}

/**
 * Step 5: Compare versions after changes.
 */
function compareVersions(
  before: RubricResult,
  after: RubricResult
): {
  delta: number;
  improved: string[];
  regressed: string[];
  unchanged: string[];
} {
  const delta = after.totalScore - before.totalScore;
  const improved: string[] = [];
  const regressed: string[] = [];
  const unchanged: string[] = [];

  for (const afterDim of after.dimensions) {
    const beforeDim = before.dimensions.find(
      (d) => d.dimensionId === afterDim.dimensionId
    );
    if (!beforeDim) continue;

    if (afterDim.score > beforeDim.score) {
      improved.push(
        `${afterDim.dimensionId}: ${beforeDim.score} → ${afterDim.score}`
      );
    } else if (afterDim.score < beforeDim.score) {
      regressed.push(
        `${afterDim.dimensionId}: ${beforeDim.score} → ${afterDim.score}`
      );
    } else {
      unchanged.push(afterDim.dimensionId);
    }
  }

  return { delta, improved, regressed, unchanged };
}

/**
 * Step 6: Determine whether to continue iterating.
 */
function shouldContinue(
  state: SkillState,
  latestScore: RubricResult,
  previousScore: RubricResult | null
): { continue: boolean; reason: string } {
  const { config } = state;

  if (latestScore.totalScore >= config.targetHeuristicScore) {
    return {
      continue: false,
      reason: `Target score ${config.targetHeuristicScore} reached (current: ${latestScore.totalScore}).`,
    };
  }

  if (state.currentIteration >= config.maxIterations) {
    return {
      continue: false,
      reason: `Maximum iterations (${config.maxIterations}) reached.`,
    };
  }

  if (previousScore) {
    const delta = latestScore.totalScore - previousScore.totalScore;
    if (delta < config.minimumExpectedImprovement) {
      return {
        continue: false,
        reason: `Last iteration improvement (${delta}) below minimum threshold (${config.minimumExpectedImprovement}).`,
      };
    }
  }

  return {
    continue: true,
    reason: `Score ${latestScore.totalScore}/${latestScore.maxPossible}, iteration ${state.currentIteration}/${config.maxIterations}.`,
  };
}

/**
 * Step 7: Record learning for future calibration.
 */
function recordLearning(
  hypothesis: ChangeHypothesis,
  observedOutcome?: string,
  conversionDelta?: number
): LearningRecord {
  return {
    hypothesisId: hypothesis.id,
    change: hypothesis.change,
    predictedOutcome: hypothesis.hypothesis,
    confidence: hypothesis.confidence,
    observedOutcome,
    conversionDelta,
    outcome: observedOutcome ? "pending" : "pending",
  };
}

/**
 * Assemble a complete audit result.
 */
function assembleAudit(
  page: PageDefinition,
  version: string,
  score: RubricResult,
  issues: ConversionIssue[],
  hypotheses: ChangeHypothesis[],
  changesMade: ChangeRecord[],
  remainingRisks: string[],
  dataRequests: DataRequest[]
): AuditResult {
  return {
    page: page.path,
    pageType: page.pageType,
    version,
    primaryConversion: page.primaryConversion,
    score,
    issues,
    hypotheses,
    changesMade,
    remainingRisks,
    dataRequests,
    timestamp: new Date().toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Evidence hierarchy (for when real data arrives)
// ---------------------------------------------------------------------------

/**
 * When data becomes available, this determines which evidence
 * source takes precedence in decision-making.
 *
 * Level 1: Real user behaviour data (funnel, scroll, clicks)
 * Level 2: Experiment results (A/B tests with statistical significance)
 * Level 3: Qualitative evidence (surveys, interviews, support tickets)
 * Level 4: UX/CRO heuristics (the rubric)
 * Level 5: Design opinion
 *
 * V1 operates at Level 4. Architecture supports all five.
 */
type EvidenceLevel = 1 | 2 | 3 | 4 | 5;

function getEvidenceLevel(data: ConversionData | null): EvidenceLevel {
  if (!data) return 4;
  if (data.experiments && data.experiments.length > 0) return 2;
  if (data.funnel && data.funnel.pageViews) return 1;
  if (data.qualitative) return 3;
  return 4;
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  createInitialState,
  understandPage,
  scorePage,
  rankOpportunities,
  generateHypotheses,
  compareVersions,
  shouldContinue,
  recordLearning,
  assembleAudit,
  getEvidenceLevel,
};

export type { SkillState, EvidenceLevel };
