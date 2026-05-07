# AI Operations Console

> **React + TypeScript portfolio project** demonstrating prompt operations, evaluation visibility, model routing, guardrail tracking, and operator-grade AI workflow governance.

**Recruiter takeaway:** *"This person understands AI systems as operational products, not just demos."*

---

## Project Overview

| Attribute | Detail |
|---|---|
| **Frontend Stack** | React 19 + Vite + TypeScript |
| **Domain** | AI operations, prompt governance, evaluations, guardrails |
| **Audience** | AI teams, product leadership, RevOps, platform teams, internal operators |
| **Signal Areas** | Quality · latency · guardrails · approvals · routing · spend |
| **Portfolio Role** | Flagship AI control-plane frontend |
| **Validation** | Vitest + Testing Library |

---

## Executive Summary

AI Operations Console is a recruiter-ready internal control plane for teams running prompts and models in production. Instead of treating AI as a chat surface, it frames prompts, evaluations, routing, approvals, and guardrails as a governed operating layer.

The project is designed to show that AI workflows need product structure, visibility, and operational discipline in the same way revenue, platform, and security systems do.

---

## Business Problem

Teams adopting AI often scatter prompt logic across tools, hide model-selection logic inside code, and discover policy problems only after outputs reach stakeholders. Operators need one surface that exposes what is healthy, what is risky, what needs approval, and which workflows deserve attention now.

---

## Solution

This studio turns AI operations into a readable product surface for:

- prompt health and approval visibility
- model routing and fallback clarity
- evaluation trend monitoring
- guardrail incident review
- run history and cost posture
- operator next-step prioritization

---

## Architecture

```text
Prompt library and policy datasets
    |
    v
Static TypeScript data model
    |
    v
React control-plane shell
    |
    +--> signal cards
    +--> evaluation charts
    +--> routing matrix
    +--> prompt registry
    +--> operator queue
    +--> guardrail incidents
    +--> run history
```

### AI Ops Lifecycle

```mermaid
flowchart LR
  A["Prompt Library"] --> B["Model Routing"]
  B --> C["Guardrail Layer"]
  C --> D["Run Execution"]
  D --> E["Evaluation Pack"]
  E --> F["Approval Queue"]
  E --> G["Operator Summary"]
  C -. policy breach .-> H["Incident Review"]
  D -. fallback .-> I["Alternate Model"]
```

### Workspace Flow

1. Operators land on one surface showing quality, latency, spend posture, and incident pressure.
2. Prompt registry cards reveal which workflows are approved, monitored, or awaiting review.
3. Routing matrix clarifies where primary vs fallback models are used and where approval gates apply.
4. Evaluation charts make quality, latency, and pass-rate tradeoffs visible together.
5. Guardrail incidents and approval queues convert AI governance into action instead of passive reporting.

---

## Screenshots

### Hero Capture

![AI Operations Console hero](screenshots/01-hero.png)

### Evaluation View

![AI evaluation view](screenshots/02-evaluations.png)

### Guardrail and Approval View

![Guardrail and approval view](screenshots/03-guardrails.png)

### Validation Proof

![Validation proof](screenshots/04-proof.png)

---

## Key Design Decisions

| Decision | Rationale |
|---|---|
| **Control-plane framing** | Positions the project as an operational AI system, not a chatbot |
| **Quality + latency pairing** | Shows tradeoff thinking rather than single-metric optimization |
| **Approval and incident emphasis** | Grounds the interface in governance and real operational risk |
| **Distinct AI-ops visual identity** | Separates the project from the revenue, forecasting, and workflow surfaces |
| **Mermaid lifecycle docs** | Keeps routing and policy logic readable directly inside GitHub |

---

## What An Engineering Leader Sees Here

- frontend systems thinking applied to AI operations
- clear translation of governance and policy complexity into product structure
- visibility into quality, cost, latency, and risk tradeoffs
- product design for internal operators, not just executives

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
git clone https://github.com/mizcausevic-dev/ai-operations-console.git
cd ai-operations-console
npm install
cp .env.example .env
npm run dev
```

Open:

- `http://localhost:5173`

### Run Tests

```bash
npm test
```

### Build

```bash
npm run build
```

---

## What This Demonstrates

- AI workflow governance translated into a real product surface
- prompt, routing, and evaluation systems made visible to operators
- premium frontend execution with charts, tables, and workflow framing
- production-minded repo hygiene with tests and security baseline
- a portfolio angle that sits above toy AI demos and generic chat UIs

---

## Future Enhancements

- prompt version comparison
- eval dataset drilldowns
- model-cost forecasting
- approval queue filtering by business function
- policy pack views by workflow family

---

## Tech Stack

[![React](https://img.shields.io/badge/React-19-111827?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=111827&color=0F172A)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-111827?style=for-the-badge&logo=vite&logoColor=FFD62E&labelColor=111827&color=7C3AED)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-111827?style=for-the-badge&logo=typescript&logoColor=white&labelColor=111827&color=2563EB)](https://www.typescriptlang.org/)
[![Recharts](https://img.shields.io/badge/Recharts-2.x-111827?style=for-the-badge&logo=chartdotjs&logoColor=79F2C0&labelColor=111827&color=0F766E)](https://recharts.org/)
[![Mermaid](https://img.shields.io/badge/Mermaid-Diagrammed-111827?style=for-the-badge&logo=mermaid&logoColor=white&labelColor=111827&color=F97316)](https://mermaid.js.org/)
[![Vitest](https://img.shields.io/badge/Vitest-Tested-111827?style=for-the-badge&logo=vitest&logoColor=white&labelColor=111827&color=A855F7)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-111827?style=for-the-badge&logo=open-source-initiative&logoColor=white&labelColor=111827&color=84CC16)](https://opensource.org/license/mit)

### Portfolio Links

- [LinkedIn](https://www.linkedin.com/in/mirzacausevic)
- [Skills Page](https://mizcausevic.com/skills/)
- [Medium](https://medium.com/@mizcausevic)
- [GitHub](https://github.com/mizcausevic-dev)

---

*Part of [mizcausevic-dev's GitHub portfolio](https://github.com/mizcausevic-dev) — demonstrating AI workflow governance, operator-grade product thinking, and execution systems that connect technology, risk, and decision-making.*
