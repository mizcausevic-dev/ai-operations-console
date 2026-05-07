import type {
  EvaluationPoint,
  Incident,
  PromptCard,
  QueueItem,
  RouteRow,
  RunEvent,
  SignalCard
} from "./types";

export const signalCards: SignalCard[] = [
  {
    label: "Prompt health",
    value: "91",
    note: "+6 since last review cycle",
    status: "stable"
  },
  {
    label: "Median latency",
    value: "1.8s",
    note: "Claude fallback under threshold",
    status: "stable"
  },
  {
    label: "Guardrail pressure",
    value: "4",
    note: "Two policy incidents need triage",
    status: "watch"
  },
  {
    label: "Monthly AI spend",
    value: "$18.4k",
    note: "Down 9% after routing optimization",
    status: "stable"
  }
];

export const promptCards: PromptCard[] = [
  {
    name: "Executive revenue brief",
    owner: "RevOps",
    model: "GPT-5.5",
    state: "Approved",
    qualityScore: 94,
    costDelta: "-7%",
    summary: "High-confidence weekly briefing with routing protections for finance-sensitive outputs."
  },
  {
    name: "Partner escalation draft",
    owner: "Channel Ops",
    model: "Claude Sonnet",
    state: "Needs review",
    qualityScore: 82,
    costDelta: "+3%",
    summary: "Output quality is acceptable, but approval path is still required for externally visible language."
  },
  {
    name: "Content governance reviewer",
    owner: "Web Platform",
    model: "GPT-5.5 mini",
    state: "Monitored",
    qualityScore: 88,
    costDelta: "-14%",
    summary: "Low-cost routing is preserving schema and metadata detection without quality regression."
  }
];

export const evaluationTrend: EvaluationPoint[] = [
  { period: "Jan", quality: 79, latency: 2.8, guardrailPass: 88 },
  { period: "Feb", quality: 82, latency: 2.4, guardrailPass: 90 },
  { period: "Mar", quality: 84, latency: 2.2, guardrailPass: 92 },
  { period: "Apr", quality: 88, latency: 2.0, guardrailPass: 95 },
  { period: "May", quality: 91, latency: 1.8, guardrailPass: 96 }
];

export const routeMatrix: RouteRow[] = [
  {
    workflow: "Board summary",
    primaryModel: "GPT-5.5",
    fallbackModel: "Claude Sonnet",
    costBand: "High",
    approval: "Executive review"
  },
  {
    workflow: "SEO audit review",
    primaryModel: "GPT-5.5 mini",
    fallbackModel: "Claude Haiku",
    costBand: "Low",
    approval: "Auto-approved"
  },
  {
    workflow: "Identity risk finding",
    primaryModel: "Claude Sonnet",
    fallbackModel: "GPT-5.5",
    costBand: "Medium",
    approval: "Security lead"
  },
  {
    workflow: "Forecast commentary",
    primaryModel: "GPT-5.5",
    fallbackModel: "GPT-5.5 mini",
    costBand: "Medium",
    approval: "RevOps director"
  }
];

export const incidents: Incident[] = [
  {
    title: "External-answer policy breach on partner escalation prompt",
    severity: "high",
    area: "Guardrail incident",
    action: "Freeze external output and route to legal review today."
  },
  {
    title: "Cost drift on long-context board summary workflow",
    severity: "medium",
    area: "Spend watch",
    action: "Shorten retrieval set and re-benchmark on fallback model."
  },
  {
    title: "Low-confidence content-governance false positives",
    severity: "low",
    area: "Evaluation noise",
    action: "Update schema examples in eval pack before next release."
  }
];

export const runHistory: RunEvent[] = [
  {
    flow: "Weekly exec brief",
    model: "GPT-5.5",
    result: "Passed",
    runtime: "1.6s",
    cost: "$1.28"
  },
  {
    flow: "Partner escalation draft",
    model: "Claude Sonnet",
    result: "Approval required",
    runtime: "2.4s",
    cost: "$0.92"
  },
  {
    flow: "Identity finding summary",
    model: "Claude Sonnet",
    result: "Guardrail tripped",
    runtime: "1.9s",
    cost: "$0.67"
  },
  {
    flow: "SEO audit summary",
    model: "GPT-5.5 mini",
    result: "Passed",
    runtime: "1.1s",
    cost: "$0.21"
  }
];

export const approvalQueue: QueueItem[] = [
  {
    title: "Approve external-facing partner escalation prompt",
    reason: "Policy-sensitive language + current guardrail incident",
    owner: "Channel leadership",
    due: "Today"
  },
  {
    title: "Review forecast commentary fallback policy",
    reason: "Latency improvement proposal changed model routing",
    owner: "Revenue operations",
    due: "This week"
  },
  {
    title: "Sign off on identity-risk remediation template",
    reason: "Security and compliance language update",
    owner: "IAM governance",
    due: "48 hours"
  }
];
