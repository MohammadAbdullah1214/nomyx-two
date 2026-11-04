import { CircleDollarSign, CircleDot } from "lucide-react";
import { References } from "../shared";
import { costAnchors } from "./content";

const labels = [
  "First 12 months",
  "First 36 months",
  "Scope excluded from the subtotal",
];

export default function CostAnchors() {
  return (
    <>
      <div className="cmp-table-desktop launch-price-desktop">
        <table className="cmp-table launch-price-table">
          <caption className="sr-only">
            Published component cost anchors for one offering, with excluded
            scope
          </caption>
          <colgroup>
            <col style={{ width: "34%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "15%" }} />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Published component</th>
              {labels.map((label) => (
                <th scope="col" key={label}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {costAnchors.map((row, index) => {
              const Icon = index === 2 ? CircleDot : CircleDollarSign;
              return (
                <tr key={row.title}>
                  <th scope="row">
                    <span className="cmp-row-title">
                      <span className="cmp-row-icon">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <span>
                        {row.title}
                        <References ids={row.references} />
                      </span>
                    </span>
                  </th>
                  <td>{row.firstYear}</td>
                  <td>{row.threeYears}</td>
                  <td>{row.excluded}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="cmp-table-mobile launch-price-mobile">
        {costAnchors.map((row, index) => {
          const Icon = index === 2 ? CircleDot : CircleDollarSign;
          return (
            <article className="cmp-mobile-decision" key={row.title}>
              <h3>
                <span className="cmp-row-icon">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span>
                  {row.title}
                  <References ids={row.references} />
                </span>
              </h3>
              <dl>
                {[row.firstYear, row.threeYears, row.excluded].map(
                  (value, column) => (
                    <div key={labels[column]}>
                      <dt>{labels[column]}</dt>
                      <dd>{value}</dd>
                    </div>
                  ),
                )}
              </dl>
            </article>
          );
        })}
      </div>
    </>
  );
}
