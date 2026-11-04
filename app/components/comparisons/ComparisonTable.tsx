import type { LucideIcon } from "lucide-react";
import { References } from "./shared";

type ComparisonRow = {
  title: string;
  cells: readonly { text: string; references: readonly string[] }[];
};

export default function ComparisonTable({
  vendors,
  rows: comparisonRows,
  icons,
  caption,
  decisionLabel = "Decision",
}: {
  vendors: readonly string[];
  rows: readonly ComparisonRow[];
  icons: readonly LucideIcon[];
  caption: string;
  decisionLabel?: string;
}) {
  return (
    <>
      <div className="cmp-table-desktop">
        <table className="cmp-table">
          <caption className="sr-only">{caption}</caption>
          <colgroup>
            <col className="cmp-decision-column" />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">{decisionLabel}</th>
              {vendors.map((vendor) => (
                <th scope="col" key={vendor}>
                  {vendor}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, index) => {
              const Icon = icons[index];
              return (
                <tr key={row.title}>
                  <th scope="row">
                    <span className="cmp-row-title">
                      <span className="cmp-row-icon">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      {row.title}
                    </span>
                  </th>
                  {row.cells.map((cell, column) => (
                    <td key={vendors[column]}>
                      {cell.text}
                      <References ids={cell.references} />
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="cmp-table-mobile">
        {comparisonRows.map((row, index) => {
          const Icon = icons[index];
          return (
            <article className="cmp-mobile-decision" key={row.title}>
              <h3>
                <span className="cmp-row-icon">
                  <Icon size={18} aria-hidden="true" />
                </span>
                {row.title}
              </h3>
              <dl>
                {row.cells.map((cell, column) => (
                  <div key={vendors[column]}>
                    <dt>{vendors[column]}</dt>
                    <dd>
                      {cell.text}
                      <References ids={cell.references} />
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          );
        })}
      </div>
    </>
  );
}
