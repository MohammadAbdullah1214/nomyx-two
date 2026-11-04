export default function NumberedRows({
  items,
}: {
  items: readonly (readonly [string, string])[];
}) {
  return (
    <ol className="cmp-numbered-rows cmp-boundaries">
      {items.map(([title, description], index) => (
        <li key={title}>
          <span className="cmp-row-number">{index + 1}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </li>
      ))}
    </ol>
  );
}
