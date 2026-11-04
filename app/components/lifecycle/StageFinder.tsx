"use client";

import { useState } from "react";
import {
  questions,
  stages,
  stageDescriptions,
  dragBasisPoints,
} from "./content";
import { Action, AssessmentAction } from "./shared";

const money = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

export default function StageFinder() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    questions.map(() => null),
  );
  const [step, setStep] = useState(0);
  const [aum, setAum] = useState("");
  const [complete, setComplete] = useState(false);
  const answered = answers.filter((answer) => answer !== null).length;
  const stage = answered
    ? Math.min(...answers.filter((answer): answer is number => answer !== null))
    : 0;
  const constraint =
    questions[answers.findIndex((answer) => answer === stage)]?.constraint;
  const aumValue = Number(aum.replaceAll(",", ""));
  const annualDrag = (aumValue * (dragBasisPoints[stage - 1] ?? 0)) / 10000;

  function downloadWorksheet() {
    const lines = [
      "Nomyx | Stage-Finder + Cost-of-Staying Worksheet",
      "",
      ...questions.flatMap((question, index) => [
        `${index + 1}. ${question.title}`,
        ...(complete
          ? [
              `Answer: ${question.options.find(([value]) => value === answers[index])?.[1]}`,
            ]
          : question.options.map(
              ([value, label]) => `[ ] Stage ${value}: ${label}`,
            )),
        "",
      ]),
      `AUM (USD): ${aumValue ? money(aumValue) : "________________"}`,
      "Your stage is the lowest stage among your answers.",
      ...(complete
        ? [
            `Current stage: ${stage} - ${stages[stage - 1]}`,
            `Constraint: ${constraint}`,
            `Illustrative annual operating drag: ${money(annualDrag)}`,
          ]
        : []),
      "",
      "Illustrative annual drag assumptions: Stage 1: 120 bps; Stage 2: 80 bps; Stage 3: 45 bps; Stage 4: 15 bps; Stage 5: 5 bps.",
      "Annual drag = AUM x basis points / 10,000. These are directional scenario assumptions, not measured costs or guaranteed savings.",
      "",
      "Cost-of-staying discussion:",
      "Annual internal operating labor: ________________",
      "Annual integration and reconciliation cost: ________________",
      "Time spent on compliance re-checks: ________________",
      "Time between economic events and settlement: ________________",
      "Dependencies on lenders, venues, custody, and regulated partners: ________________",
      "Evidence needed to reach the next stage: ________________",
      "",
      "Maturity describes capability, not guaranteed liquidity, financing, transaction volume, or pricing.",
      "Scenario only. Not a financing quote, valuation, guaranteed saving, or prediction of market availability.",
    ];
    const url = URL.createObjectURL(
      new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "nomyx-stage-finder-cost-of-staying-worksheet.txt";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <>
      <div className="lc-maturity-scale">
        {[
          { label: "Trapped", start: 0, end: 2 },
          { label: "Deployable · velocity builds →", start: 2, end: 5 },
        ].map(({ label, start, end }) => (
          <div className="lc-maturity-zone" key={label}>
            <p className="lc-caption">{label}</p>
            <ol>
              {stages.slice(start, end).map((name, index) => (
                <li key={name}>
                  <span>{start + index + 1}</span>
                  <h3>{name}</h3>
                  <p>{stageDescriptions[start + index]}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <ul className="lc-maturity-axes">
        <li>
          Maturity stages measure{" "}
          <strong>how far your capital can move.</strong>
        </li>
        <li>
          Lifecycle gates describe{" "}
          <strong>
            where it moves: Orient, Tokenize, Distribute, Collateralize, Settle.
            Different axes.
          </strong>
        </li>
      </ul>
      <p className="lc-maturity-note">
        Maturity describes capability, not guaranteed liquidity, financing,
        transaction volume, or pricing.
      </p>
      <div className="lc-split lc-tool lc-stage-finder">
        <div className="lc-tool-input">
          <h3>Interactive Stage-Finder</h3>
          <p>Find your stage. See what constrains the next one.</p>
          <p className="lc-caption mt-6">{answered} of 5 answered</p>
          <progress max={5} value={answered} aria-label="Questions answered" />
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const missing = answers.findIndex((answer) => answer === null);
              if (missing !== -1) {
                setStep(missing);
                return;
              }
              setComplete(true);
            }}
          >
            {step < questions.length ? (
              <fieldset key={step}>
                <legend tabIndex={-1}>
                  Q{step + 1}. {questions[step].title}
                </legend>
                <div className="lc-options">
                  {questions[step].options.map(([value, label]) => (
                    <label
                      key={value}
                      className={answers[step] === value ? "lc-selected" : ""}
                    >
                      <input
                        type="radio"
                        name={`question-${step}`}
                        value={value}
                        checked={answers[step] === value}
                        onChange={() => {
                          setAnswers(
                            answers.map((answer, index) =>
                              index === step ? value : answer,
                            ),
                          );
                          setComplete(false);
                        }}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>
            ) : (
              <div className="lc-field">
                <label htmlFor="lc-aum">Your AUM (USD)</label>
                <input
                  id="lc-aum"
                  type="text"
                  inputMode="numeric"
                  required
                  pattern="[0-9,]+"
                  value={aum}
                  placeholder="e.g. 500,000,000"
                  onChange={(event) => {
                    const digits = event.target.value
                      .replace(/\D/g, "")
                      .slice(0, 15);
                    setAum(
                      digits ? Number(digits).toLocaleString("en-US") : "",
                    );
                    setComplete(false);
                  }}
                />
                <Action text="Find my stage" type="submit" />
              </div>
            )}
            <div className="lc-step-nav">
              <button
                type="button"
                disabled={step === 0}
                onClick={() => setStep(step - 1)}
              >
                ← Back
              </button>
              <span>
                {step < 5 ? `Question ${step + 1} of 5` : "Final step"}
              </span>
              {step < 5 && (
                <button
                  type="button"
                  disabled={answers[step] === null}
                  onClick={() => setStep(step + 1)}
                >
                  Next →
                </button>
              )}
            </div>
          </form>
          <div className="lc-provisional-stage">
            <p className="lc-caption">Provisional stage</p>
            <ol>
              {stages.map((name, index) => (
                <li
                  key={name}
                  className={
                    stage === index + 1
                      ? "lc-current-stage"
                      : stage > index + 1
                        ? "lc-reached-stage"
                        : ""
                  }
                >
                  <span>{index + 1}</span>
                  <strong>{name}</strong>
                </li>
              ))}
            </ol>
            <p className="lc-note" aria-live="polite">
              {stage
                ? `Provisional stage: ${stage} · ${stages[stage - 1]}. Your weakest answer sets the stage.`
                : "Answer a question to see your provisional stage."}
            </p>
            <p className="lc-note">
              Your stage is set by your weakest answer. That is where the
              constraint sits.
            </p>
          </div>
        </div>
        <div className="lc-tool-output" aria-live="polite">
          {complete ? (
            <>
              <p className="lc-caption">Your current stage</p>
              <h3>
                Stage {stage} · {stages[stage - 1]}
              </h3>
              <progress
                max={5}
                value={stage}
                aria-label="Current maturity stage"
              />
              <h4>The constraint to your next stage</h4>
              <p>{constraint}</p>
              <h4>Illustrative annual structural-velocity drag</h4>
              <p className="lc-metric">{money(annualDrag)}</p>
              <p>
                {dragBasisPoints[stage - 1]} bps of {money(aumValue)} AUM at
                this stage.
              </p>
              <p className="lc-note">
                Illustrative scenario only. These are directional operating-drag
                assumptions, not a financing quote, valuation, guaranteed
                saving, or prediction of market availability.
              </p>
              <AssessmentAction />
              <button
                className="lc-text-button mt-6"
                type="button"
                onClick={() => {
                  setAnswers(questions.map(() => null));
                  setStep(0);
                  setAum("");
                  setComplete(false);
                }}
              >
                Start over
              </button>
            </>
          ) : (
            <>
              <h3>Your answers so far</h3>
              <ol className="lc-answer-list">
                {questions.map((question, index) => (
                  <li
                    key={question.label}
                    className={step === index ? "lc-active-answer" : ""}
                  >
                    <button
                      type="button"
                      disabled={answers[index] === null && step !== index}
                      onClick={() => setStep(index)}
                    >
                      <span className="lc-answer-number">Q{index + 1}</span>
                      <span className="lc-answer-body">
                        <span className="lc-caption">{question.label}</span>
                        <span>
                          {question.options.find(
                            ([value]) => value === answers[index],
                          )?.[1] ?? "Not answered yet"}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
              <p className="lc-note">
                Select an answered question to change it.
              </p>
            </>
          )}
        </div>
      </div>
      <div id="worksheet" className="lc-actions">
        <Action
          text="Download the Stage-Finder + Cost-of-Staying Worksheet"
          onClick={downloadWorksheet}
          tone="outline"
        />
      </div>
    </>
  );
}
