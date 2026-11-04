"use client";

import { useState } from "react";
import { Action } from "./shared";

const fields = [
  {
    key: "book",
    label: "Eligible tokenized book value (USD)",
    initial: 250000000,
    max: 1e15,
  },
  {
    key: "eligible",
    label: "Assumed eligible collateral percentage",
    initial: 70,
    max: 100,
  },
  {
    key: "advance",
    label: "Assumed lender advance rate (%)",
    initial: 60,
    max: 100,
  },
  { key: "cost", label: "Estimated borrowing cost (%)", initial: 9, max: 100 },
  {
    key: "return",
    label: "Expected deployment return (%)",
    initial: 14,
    max: 100,
  },
] as const;
type FieldKey = (typeof fields)[number]["key"];

const money = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

function formatBookValue(value: string) {
  if (!value) return "";
  const [whole, fraction] = value.split(".");
  const formatted = Number(whole || "0").toLocaleString("en-US");
  return fraction === undefined ? formatted : `${formatted}.${fraction}`;
}

export default function CollateralCalculator() {
  const [values, setValues] = useState<Record<FieldKey, string>>({
    book: "250000000",
    eligible: "70",
    advance: "60",
    cost: "9",
    return: "14",
  });
  const valid = fields.every(
    ({ key, max }) =>
      values[key] !== "" &&
      Number.isFinite(Number(values[key])) &&
      Number(values[key]) >= 0 &&
      Number(values[key]) <= max,
  );
  const capacity =
    (((Number(values.book) * Number(values.eligible)) / 100) *
      Number(values.advance)) /
    100;
  const spread = Number(values.return) - Number(values.cost);
  const results = [
    ["Illustrative financing capacity", money(capacity)],
    [
      "Illustrative annual capital cost",
      money((capacity * Number(values.cost)) / 100),
    ],
    [
      "Illustrative deployment spread",
      `${spread > 0 ? "+" : ""}${spread.toFixed(1)} pts`,
    ],
    [
      "Illustrative net annual on deployed capital",
      money((capacity * spread) / 100),
    ],
  ];

  return (
    <>
      <div className="lc-split lc-tool">
        <div className="lc-tool-input bg-white">
          <h3>Inputs</h3>
          {fields.map(({ key, label, max }) => (
            <div className="lc-field" key={key}>
              <label htmlFor={`lc-${key}`}>
                {label}
                {key === "eligible" ? " (%)" : ""}
              </label>
              {key === "book" ? (
                <div className="relative">
                  <span
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
                    aria-hidden="true"
                  >
                    $
                  </span>
                  <input
                    id="lc-book"
                    type="text"
                    inputMode="decimal"
                    className="lc-currency-input"
                    value={formatBookValue(values.book)}
                    onChange={(event) => {
                      const input = event.currentTarget;
                      const raw = input.value.replace(/[$,\s]/g, "");
                      if (!/^\d*(\.\d{0,2})?$/.test(raw)) return;
                      const charactersBeforeCaret = input.value
                        .slice(0, input.selectionStart ?? input.value.length)
                        .replace(/,/g, "").length;
                      const formatted = formatBookValue(raw);
                      setValues({ ...values, book: raw });
                      requestAnimationFrame(() => {
                        let position = 0;
                        let characters = 0;
                        while (
                          position < formatted.length &&
                          characters < charactersBeforeCaret
                        ) {
                          if (formatted[position] !== ",") characters++;
                          position++;
                        }
                        input.setSelectionRange(position, position);
                      });
                    }}
                  />
                </div>
              ) : (
                <input
                  id={`lc-${key}`}
                  type="number"
                  min={0}
                  max={max}
                  step="any"
                  inputMode="decimal"
                  value={values[key]}
                  onChange={(event) =>
                    setValues({ ...values, [key]: event.target.value })
                  }
                />
              )}
            </div>
          ))}
          {!valid && (
            <p className="lc-note" role="status">
              Enter a non-negative book value and percentages between 0 and 100
              to calculate this scenario.
            </p>
          )}
        </div>
        <div className="lc-tool-output" aria-live="polite" aria-atomic="true">
          <h3>Illustrative output</h3>
          <dl className="lc-results">
            {results.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{valid ? value : "—"}</dd>
                {label === "Illustrative financing capacity" && (
                  <progress
                    max={100}
                    value={
                      valid && Number(values.book) > 0
                        ? (capacity / Number(values.book)) * 100
                        : 0
                    }
                    aria-label="Financing capacity as a percentage of book value"
                  />
                )}
              </div>
            ))}
          </dl>
          <p className="lc-note">
            Scenario modeling only. Not a financing quote, lender commitment,
            valuation, or prediction of market availability.
          </p>
        </div>
      </div>
      <div className="lc-actions">
        <Action text="Model my collateralization headroom" href="#assessment" />
      </div>
    </>
  );
}
