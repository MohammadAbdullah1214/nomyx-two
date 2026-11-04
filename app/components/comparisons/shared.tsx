import type { ReactNode } from "react";
import AnimatedAction from "@/app/components/shared/AnimatedAction";
const bookingUrl =
  "https://bookings.cloud.microsoft/book/NomyxDiscoveryCall@nomyx.io/?ismsaljsauthenabled=true";

export function FitReviewAction() {
  return (
    <AnimatedAction
      text="Book an Infrastructure Fit Review"
      href={bookingUrl}
      target="_blank"
    />
  );
}

export function References({ ids }: { ids: readonly string[] }) {
  if (ids.length === 0) return null;
  return (
    <span className="cmp-reference">
      {" "}
      [
      {ids.map((id, index) => (
        <span key={id}>
          {index > 0 && ", "}
          <a href={`#source-${id.toLowerCase()}`} aria-label={`Source ${id}`}>
            {id}
          </a>
        </span>
      ))}
      ]
    </span>
  );
}

export function ComparisonSection({
  children,
  id,
  neutral = false,
}: {
  children: ReactNode;
  id?: string;
  neutral?: boolean;
}) {
  return (
    <section
      id={id}
      className={`cmp-section${neutral ? " bg-bg-neutral" : " bg-bg"}`}
    >
      <div className="custom-container">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="cmp-section-heading">
      <h2 className="section-heading">{title}</h2>
      {children && <div className="cmp-intro-copy">{children}</div>}
    </div>
  );
}
