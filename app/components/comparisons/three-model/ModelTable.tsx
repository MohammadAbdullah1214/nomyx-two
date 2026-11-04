import type { ReactNode } from "react";

type ModelRow = { group: string } | { title: string; cells: ReactNode[] };

export default function ModelTable({
  headings,
  rows,
  caption,
}: {
  headings: ReactNode[];
  rows: ModelRow[];
  caption: string;
}) {
  return (
    <>
      <div className="tm-table-desktop">
        <table>
          <caption>{caption}</caption>
          <thead>
            <tr>
              {headings.map((heading, index) => (
                <th scope="col" key={index}>
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) =>
              "group" in row ? (
                <tr className="tm-table-group" key={row.group}>
                  <th colSpan={headings.length}>{row.group}</th>
                </tr>
              ) : (
                <tr key={row.title}>
                  <th scope="row">{row.title}</th>
                  {row.cells.map((cell, index) => (
                    <td key={index}>{cell}</td>
                  ))}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
      <div className="tm-table-mobile" aria-label={caption}>
        {rows.map((row) =>
          "group" in row ? (
            <h3 className="tm-mobile-group" key={row.group}>
              {row.group}
            </h3>
          ) : (
            <article className="tm-mobile-row" key={row.title}>
              <h3>{row.title}</h3>
              <dl>
                {row.cells.map((cell, index) => (
                  <div key={index}>
                    <dt>{headings[index + 1]}</dt>
                    <dd>{cell}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ),
        )}
      </div>
    </>
  );
}
