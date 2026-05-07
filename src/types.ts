export type SignalCard = {
  label: string;
  value: string;
  note: string;
  status: "stable" | "watch" | "critical";
};

export type PromptCard = {
  name: string;
  owner: string;
  model: string;
  state: string;
  qualityScore: number;
  costDelta: string;
  summary: string;
};

export type EvaluationPoint = {
  period: string;
  quality: number;
  latency: number;
  guardrailPass: number;
};

export type RouteRow = {
  workflow: string;
  primaryModel: string;
  fallbackModel: string;
  costBand: string;
  approval: string;
};

export type Incident = {
  title: string;
  severity: "high" | "medium" | "low";
  area: string;
  action: string;
};

export type RunEvent = {
  flow: string;
  model: string;
  result: string;
  runtime: string;
  cost: string;
};

export type QueueItem = {
  title: string;
  reason: string;
  owner: string;
  due: string;
};
