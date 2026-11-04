import Accordion from "@/app/components/shared/Accordion";
import { faqs } from "./content";

export default function Questions() {
  return (
    <section id="faq" className="sec">
      <div className="wrap custom-container">
        <div className="sh">
          <span className="tag eyebrow">Diligence pre-emption</span>
          <h2 className="section-heading">
            Frequently asked questions by CFOs, GCs, and heads of operations.
          </h2>
        </div>
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
