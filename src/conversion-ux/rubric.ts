/**
 * ConversionUXSkill — Default Rubric
 *
 * 100-point rubric for heuristic conversion scoring.
 * Weights are configurable per page type.
 */

import type { RubricDimension, ConversionUXConfig } from "./types";

export const defaultDimensions: RubricDimension[] = [
  {
    id: "message-clarity",
    label: "Message clarity",
    maxScore: 15,
    weight: 0.15,
    description:
      "Can someone quickly understand what this is and why it matters? Headline, subheadline, and section headings evaluated for specificity, benefit orientation, and scannability.",
  },
  {
    id: "value-proposition",
    label: "Value proposition",
    maxScore: 12,
    weight: 0.12,
    description:
      "Is the benefit compelling and specific? Evaluates clarity, specificity, importance, differentiation, credibility, and immediacy of the core offer.",
  },
  {
    id: "audience-relevance",
    label: "Audience relevance",
    maxScore: 8,
    weight: 0.08,
    description:
      "Does the right visitor recognise this is for them? Evaluates whether language, examples, and framing match the target audience's self-image and vocabulary.",
  },
  {
    id: "information-hierarchy",
    label: "Information hierarchy",
    maxScore: 10,
    weight: 0.10,
    description:
      "Does visual hierarchy direct attention appropriately? Evaluates whether commercially important elements dominate attention, and whether scan paths guide toward conversion.",
  },
  {
    id: "cta-clarity",
    label: "CTA clarity and prominence",
    maxScore: 12,
    weight: 0.12,
    description:
      "Is the desired action obvious and compelling? Evaluates wording, contrast, size, placement, repetition, proximity to persuasion, and hierarchy between primary/secondary CTAs.",
  },
  {
    id: "friction",
    label: "Friction",
    maxScore: 10,
    weight: 0.10,
    description:
      "How easy is it to progress? Evaluates cognitive load, unnecessary choices, unclear next steps, form complexity, and anything making the visitor think or hesitate.",
  },
  {
    id: "trust-evidence",
    label: "Trust / evidence",
    maxScore: 10,
    weight: 0.10,
    description:
      "Are important claims credible? Evaluates presence, quality, specificity, relevance, and placement of social proof, case studies, credentials, and trust indicators.",
  },
  {
    id: "objection-handling",
    label: "Objection handling",
    maxScore: 6,
    weight: 0.06,
    description:
      "Are important barriers addressed? Evaluates whether likely visitor objections (cost, effort, trust, relevance, risk) are anticipated and resolved near points of commitment.",
  },
  {
    id: "visual-quality",
    label: "Visual / interaction quality",
    maxScore: 6,
    weight: 0.06,
    description:
      "Does the interface feel polished and intentional? Evaluates typography, spacing, consistency, image quality, layout rhythm, colour usage, and interaction feedback.",
  },
  {
    id: "mobile-ux",
    label: "Mobile UX",
    maxScore: 5,
    weight: 0.05,
    description:
      "Does the mobile experience support conversion? Evaluates first viewport, CTA visibility, tap targets, text wrapping, scroll length, and sticky elements.",
  },
  {
    id: "accessibility",
    label: "Accessibility",
    maxScore: 3,
    weight: 0.03,
    description:
      "Are core accessibility standards respected? Evaluates contrast, keyboard navigation, focus states, labels, semantic structure, reduced motion, and touch targets.",
  },
  {
    id: "performance",
    label: "Performance / distraction",
    maxScore: 3,
    weight: 0.03,
    description:
      "Does anything interfere with understanding or action? Evaluates load performance, layout shift, distracting animations, unnecessary JavaScript, and delayed CTA availability.",
  },
];

export const defaultConfig: ConversionUXConfig = {
  targetHeuristicScore: 90,
  maxIterations: 5,
  minimumExpectedImprovement: 3,
  rubricDimensions: defaultDimensions,
};
