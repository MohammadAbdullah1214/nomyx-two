import Accordion from "@/app/components/shared/Accordion";
import { faqs } from "./content";

export default function Questions() {
  return (
    <section id="faq" className="nvs-section sky">
      <div className="wrap custom-container">
        <div className="sh">
          <span className="tag eyebrow">Questions your committee will ask</span>
          <h2 className="section-heading">
            Straight answers to your hardest questions.
          </h2>
        </div>
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
