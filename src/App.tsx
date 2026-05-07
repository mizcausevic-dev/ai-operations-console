import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import {
  approvalQueue,
  evaluationTrend,
  incidents,
  promptCards,
  routeMatrix,
  runHistory,
  signalCards
} from "./data";

const badgeClass = (status: string) => `signal-card__badge signal-card__badge--${status}`;
const severityClass = (severity: string) => `incident__pill incident__pill--${severity}`;

export default function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero__copy">
          <div className="eyebrow">AI operations console</div>
          <h1>Run prompts, evaluations, approvals, and model routing like a real operating system.</h1>
          <p>
            A recruiter-ready control plane for teams that need AI workflows to be observable, governable,
            cost-aware, and safe enough for production leadership.
          </p>
          <div className="hero__chips">
            <span>Prompt ops</span>
            <span>Guardrails</span>
            <span>Evaluations</span>
            <span>Routing</span>
          </div>
        </div>

        <div className="hero__diagram">
          <div className="hero__node">
            <strong>Prompt library</strong>
            <span>Versioned + approved</span>
          </div>
          <div className="hero__line" />
          <div className="hero__node">
            <strong>Model routing</strong>
            <span>Primary + fallback</span>
          </div>
          <div className="hero__line hero__line--accent" />
          <div className="hero__node">
            <strong>Guardrails</strong>
            <span>Policy + risk control</span>
          </div>
          <div className="hero__line" />
          <div className="hero__node">
            <strong>Evaluations</strong>
            <span>Quality + latency + pass rate</span>
          </div>
        </div>
      </header>

      <section className="signal-grid">
        {signalCards.map((card) => (
          <article key={card.label} className="signal-card">
            <div className="signal-card__header">
              <span>{card.label}</span>
              <span className={badgeClass(card.status)}>{card.status}</span>
            </div>
            <strong>{card.value}</strong>
            <p>{card.note}</p>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="panel panel--wide">
          <div className="panel__header">
            <div>
              <div className="eyebrow">Evaluation trend</div>
              <h2>Quality is improving while latency and risk stay inside policy.</h2>
            </div>
          </div>
          <div className="chart-stack">
            <div className="chart-card">
              <h3>Quality and guardrail pass rate</h3>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={evaluationTrend}>
                  <defs>
                    <linearGradient id="qualityFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#79f2c0" stopOpacity={0.5} />
                      <stop offset="95%" stopColor="#79f2c0" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(148,163,184,0.14)" vertical={false} />
                  <XAxis dataKey="period" stroke="#7c8aa5" />
                  <YAxis stroke="#7c8aa5" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="quality"
                    stroke="#79f2c0"
                    fill="url(#qualityFill)"
                    strokeWidth={3}
                  />
                  <Line type="monotone" dataKey="guardrailPass" stroke="#6ba8ff" strokeWidth={3} dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <h3>Latency profile</h3>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={evaluationTrend}>
                  <CartesianGrid stroke="rgba(148,163,184,0.14)" vertical={false} />
                  <XAxis dataKey="period" stroke="#7c8aa5" />
                  <YAxis stroke="#7c8aa5" />
                  <Tooltip />
                  <Line type="monotone" dataKey="latency" stroke="#ff8c5a" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </article>

        <article className="panel">
          <div className="eyebrow">Prompt registry</div>
          <h2>What is healthy, approved, and worth escalating.</h2>
          <div className="prompt-list">
            {promptCards.map((prompt) => (
              <div key={prompt.name} className="prompt-card">
                <div className="prompt-card__top">
                  <strong>{prompt.name}</strong>
                  <span>{prompt.state}</span>
                </div>
                <p>{prompt.summary}</p>
                <div className="prompt-card__meta">
                  <span>{prompt.owner}</span>
                  <span>{prompt.model}</span>
                  <span>Quality {prompt.qualityScore}</span>
                  <span>{prompt.costDelta}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel">
          <div className="eyebrow">Routing matrix</div>
          <h2>Model choices are visible, governable, and tied to business risk.</h2>
          <div className="table-shell">
            <table>
              <thead>
                <tr>
                  <th>Workflow</th>
                  <th>Primary</th>
                  <th>Fallback</th>
                  <th>Cost band</th>
                  <th>Approval</th>
                </tr>
              </thead>
              <tbody>
                {routeMatrix.map((row) => (
                  <tr key={row.workflow}>
                    <td>{row.workflow}</td>
                    <td>{row.primaryModel}</td>
                    <td>{row.fallbackModel}</td>
                    <td>{row.costBand}</td>
                    <td>{row.approval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="panel">
          <div className="eyebrow">Operator queue</div>
          <h2>What leadership and operators should approve next.</h2>
          <div className="queue-list">
            {approvalQueue.map((item) => (
              <div key={item.title} className="queue-item">
                <div className="queue-item__top">
                  <strong>{item.title}</strong>
                  <span>{item.due}</span>
                </div>
                <p>{item.reason}</p>
                <small>{item.owner}</small>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel">
          <div className="eyebrow">Guardrail incidents</div>
          <h2>AI ops gets serious when policy failures are visible and actionable.</h2>
          <div className="incident-list">
            {incidents.map((incident) => (
              <div key={incident.title} className="incident">
                <div className="incident__top">
                  <strong>{incident.title}</strong>
                  <span className={severityClass(incident.severity)}>{incident.severity}</span>
                </div>
                <p>{incident.area}</p>
                <small>{incident.action}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="eyebrow">Recent runs</div>
          <h2>Run history should reveal outcome, cost, and workflow posture in seconds.</h2>
          <div className="run-history">
            {runHistory.map((run) => (
              <div key={run.flow} className="run-row">
                <div>
                  <strong>{run.flow}</strong>
                  <p>{run.model}</p>
                </div>
                <span>{run.result}</span>
                <span>{run.runtime}</span>
                <span>{run.cost}</span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
