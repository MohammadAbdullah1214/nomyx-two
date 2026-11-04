import type { GuideTable } from "./content";

export default function PillarTable({ table }: { table: GuideTable }) {
  return (
    <>
      <div className="tbl-wrap d-only" role="region" aria-label={table.title} tabIndex={0}>
        <table className="dt">
          <caption>{table.title}</caption>
          <thead>
            <tr>{table.headings.map((heading) => <th key={heading} scope="col">{heading}</th>)}</tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map(({ text, badge }, cellIndex) => (
                  <td key={cellIndex}>{badge ? <span className={`tag ${badge}`}>{text}</span> : text}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mrc m-only from-dt">
        <div className="mrc-cap">{table.title}</div>
        {table.rows.map((row, rowIndex) => {
          const details = row.slice(1).map((cell, index) => ({ ...cell, heading: table.headings[index + 1] }));
          const sections = details.filter(({ badge }) => !badge);
          return (
            <div className="mrc-card" key={rowIndex}>
              <div className="mrc-h">
                <div className="mrc-t">{row[0].text}</div>
                {details.filter(({ badge }) => badge).map(({ text, badge, heading }) => (
                  <span className={`mrc-chip ${badge}`} aria-label={`${heading}: ${text}`} key={heading}>{text}</span>
                ))}
              </div>
              {sections.map(({ text, heading }) => (
                <div className="mrc-s" key={heading}>
                  {sections.length > 1 && <div className="mrc-l">{heading}</div>}
                  <div className="mrc-v">{text}</div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}
