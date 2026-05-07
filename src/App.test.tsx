import { render, screen } from "@testing-library/react";
import App from "./App";

describe("AI Operations Console", () => {
  it("renders the hero title", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /run prompts, evaluations, approvals, and model routing like a real operating system/i
      })
    ).toBeInTheDocument();
  });

  it("renders guardrail incidents and prompt registry content", () => {
    render(<App />);
    expect(screen.getByText(/guardrail incidents/i)).toBeInTheDocument();
    expect(screen.getByText(/executive revenue brief/i)).toBeInTheDocument();
  });
});
