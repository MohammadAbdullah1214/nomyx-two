"use client";

import AnimatedAction from "@/app/components/shared/AnimatedAction";
import { scorecardRows } from "./scorecard";

export default function ScorecardDownload({ text }: { text: string }) {
  function download() {
    const rows = [
      ["Nomyx vs Securitize — operating-model evaluation scorecard"],
      ["Asset / vehicle", "AUM (USD)", "Evaluation date", "Reviewer"],
      ["", "", "", ""],
      [
        "Source-page statements are evaluation inputs, not independently verified results.",
      ],
      [
        "Decision",
        "Securitize",
        "Nomyx",
        "Stage / operating impact",
        "Required outcome",
        "Evidence / source / as-of date",
        "Owner",
        "Open questions",
      ],
      ...scorecardRows.map((row) => [...row, "", "", "", ""]),
      [],
      ["Cost horizon", "Securitize", "Nomyx", "Assumptions / dependencies"],
      ["Initial implementation", "", "", ""],
      ["Annual operations", "", "", ""],
      ["Long-term change and exit", "", "", ""],
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
    anchor.download = "nomyx-vs-securitize-evaluation-scorecard.csv";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <AnimatedAction text={text} onClick={download} tone="outline-white" />;
}
