"use client";

import AnimatedAction from "@/app/components/shared/AnimatedAction";
import { scorecardRows } from "./content";

export default function ScorecardDownload() {
  function downloadScorecard() {
    const rows = [
      [
        "Nomyx operating-model evaluation scorecard and capital velocity worksheet",
      ],
      ["Evaluation date", "Asset / vehicle", "AUM (USD)", "Reviewer"],
      ["", "", "", ""],
      [
        "Source-page statements below are evaluation inputs, not independent verification.",
      ],
      [
        "Dimension",
        "Regulated monolith",
        "Nomyx issuer infrastructure",
        "Credit protocol",
        "Required capability",
        "Evidence / source / as-of date",
        "Owner",
        "Open questions",
      ],
      ...scorecardRows
        .filter((row) => row.length === 4)
        .map((row) => [...row, "", "", "", ""]),
      [],
      ["Capital velocity worksheet"],
      [
        "Lifecycle event",
        "Current elapsed days",
        "Staff hours",
        "Manual handoffs",
        "Capital waiting (USD)",
        "Target days",
        "Evidence / assumptions",
      ],
      ...[
        "Onboarding",
        "Issuance",
        "Amendment",
        "Distribution",
        "Collateral diligence",
        "Settlement",
        "Provider transition",
      ].map((event) => [event, "", "", "", "", "", ""]),
      [],
      [
        "Three-year cost",
        "Launch",
        "36 months recurring operations",
        "Changes / recovery",
        "Exit",
        "Total",
      ],
      ["Regulated monolith", "", "", "", "", ""],
      ["Nomyx issuer infrastructure", "", "", "", "", ""],
      ["Credit protocol", "", "", "", "", ""],
    ];
    const csv = rows
      .map((row) =>
        row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(","),
      )
      .join("\r\n");
    const url = URL.createObjectURL(
      new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8;" }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download =
      "nomyx-evaluation-scorecard-capital-velocity-worksheet.csv";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <AnimatedAction
      text="Download Evaluation Scorecard & Capital Velocity Worksheet"
      onClick={downloadScorecard}
      tone="outline-white"
    />
  );
}
