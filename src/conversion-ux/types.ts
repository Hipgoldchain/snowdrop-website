/**
 * ConversionUXSkill — Type System
 *
 * Data structures for conversion-focused UX auditing.
 * Designed to operate on heuristics now, real data later.
 */

// ---------------------------------------------------------------------------
// Rubric
// ---------------------------------------------------------------------------

export interface RubricDimension {
  id: string;
  label: string;
  maxScore: number;
  weight: number; // 0–1, sums to 1 across all dimensions
  description: string;
}

export interface DimensionScore {
  dimensionId: string;
  score: number;
  maxScore: number;
  positives: string[];
  negatives: string[];
  reasoning: string;
}

export interface RubricResult {
  totalScore: number;
  maxPossible: number;
  dimensions: DimensionScore[];
  timestamp: string;
  version: string;
  page: string;
  pageType: PageType;
}

// ---------------------------------------------------------------------------
// Page analysis
// ---------------------------------------------------------------------------

export type PageType =
  | "landing-page"
  | "homepage"
  | "pricing"
  | "signup"
  | "checkout"
  | "product"
  | "thank-you"
  | "content";

export interface PageDefinition {
  path: string;
  pageType: PageType;
  primaryAudience: string;
  visitorIntent: string;
  primaryConversion: string;
  secondaryConversions: string[];
  mustUnderstand: string[];
  mustBelieve: string[];
  mustDo: string[];
}

// ---------------------------------------------------------------------------
// Issues
// ---------------------------------------------------------------------------

export type Severity = "critical" | "high" | "medium" | "low";
export type Confidence = "high" | "medium" | "low";

export interface ConversionIssue {
  id: string;
  title: string;
  description: string;
  rubricDimension: string;
  severity: Severity;
  confidence: Confidence;
  expectedConversionImpact: string;
  implementationEffort: "trivial" | "small" | "medium" | "large";
  affectedComponent: string;
  suggestedChange: string;
  reasoning: string;
}

// ---------------------------------------------------------------------------
// Hypotheses
// ---------------------------------------------------------------------------

export interface ChangeHypothesis {
  id: string;
  problem: string;
  change: string;
  hypothesis: string;
  metricOnceAvailable: string;
  confidence: Confidence;
  priority: number; // higher = do first
  issueIds: string[];
}

// ---------------------------------------------------------------------------
// Audit result (persistent, comparable between runs)
// ---------------------------------------------------------------------------

export interface AuditResult {
  page: string;
  pageType: PageType;
  version: string;
  primaryConversion: string;
  score: RubricResult;
  issues: ConversionIssue[];
  hypotheses: ChangeHypothesis[];
  changesMade: ChangeRecord[];
  remainingRisks: string[];
  dataRequests: DataRequest[];
  timestamp: string;
}

export interface ChangeRecord {
  id: string;
  hypothesisId: string;
  description: string;
  filesModified: string[];
  beforeScore: number;
  afterScore: number | null; // null until re-scored
}

// ---------------------------------------------------------------------------
// Data layer (V1: empty, future: real analytics)
// ---------------------------------------------------------------------------

export interface DataRequest {
  metric: string;
  purpose: string;
  source: string;
  priority: Confidence;
}

export interface FunnelData {
  pageViews?: number;
  ctaImpressions?: number;
  ctaClicks?: number;
  signupStarts?: number;
  signupCompletes?: number;
  enquirySubmissions?: number;
}

export interface BehaviourData {
  scrollDepth?: number[];
  timeToFirstInteraction?: number;
  exitRate?: number;
  bounceRate?: number;
  rageClicks?: number;
  formAbandonment?: number;
}

export interface SegmentData {
  device?: "desktop" | "tablet" | "mobile";
  trafficSource?: string;
  campaign?: string;
  geography?: string;
  isReturning?: boolean;
}

export interface ExperimentData {
  variant: string;
  visitors: number;
  conversions: number;
  conversionRate: number;
  uplift: number;
  statisticalSignificance: number;
}

export interface QualitativeData {
  surveys?: string[];
  sessionObservations?: string[];
  supportQuestions?: string[];
  cancellationReasons?: string[];
}

export interface ConversionData {
  funnel?: FunnelData;
  behaviour?: BehaviourData;
  segment?: SegmentData;
  experiments?: ExperimentData[];
  qualitative?: QualitativeData;
}

// ---------------------------------------------------------------------------
// Learning layer (V1: structure only, future: populated from experiments)
// ---------------------------------------------------------------------------

export interface LearningRecord {
  hypothesisId: string;
  change: string;
  predictedOutcome: string;
  confidence: Confidence;
  observedOutcome?: string;
  trafficSample?: number;
  conversionDelta?: number;
  outcome?: "confirmed" | "refuted" | "inconclusive" | "pending";
}

// ---------------------------------------------------------------------------
// Skill configuration
// ---------------------------------------------------------------------------

export interface ConversionUXConfig {
  targetHeuristicScore: number;
  maxIterations: number;
  minimumExpectedImprovement: number;
  rubricDimensions: RubricDimension[];
}
