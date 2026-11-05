import { strict as assert } from "node:assert";
import { test } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import {
  faqAnswerText,
  isSafeEditorLink,
  parseFaqAnswer,
} from "../lib/faq-links";
import { normalizeBlogFaqs } from "../lib/blogs";
import FaqAnswer from "../app/components/FaqAnswer";

test("legacy plain FAQ text is preserved", () => {
  const answer = "Plain answer, with <example> and multiple\nlines.";
  assert.equal(faqAnswerText(answer), answer);
  assert.ok(parseFaqAnswer(answer).every((part) => !part.href));
});

test("FAQ links survive serialization and normalization", () => {
  const faq = {
    question: "Where?",
    answer:
      "Read [our guide](https://example.com/guide) or [contact us](mailto:team@example.com).",
  };
  const saved = normalizeBlogFaqs(JSON.stringify([faq]));
  assert.deepEqual(saved, [faq]);
  assert.equal(faqAnswerText(saved[0].answer), "Read our guide or contact us.");
  assert.deepEqual(
    parseFaqAnswer(saved[0].answer)
      .filter((part) => part.href)
      .map((part) => part.href),
    ["https://example.com/guide", "mailto:team@example.com"],
  );
});

test("public FAQ rendering creates anchors without interpreting raw HTML", () => {
  const html = renderToStaticMarkup(
    createElement(FaqAnswer, {
      answer: "<script>alert(1)</script> [Guide](https://example.com)",
    }),
  );
  assert.match(html, /href="https:\/\/example.com"/);
  assert.ok(!html.includes("<script>"));
  assert.match(html, /&lt;script&gt;/);
});

test("unsafe links remain literal text and never become anchors", () => {
  for (const href of [
    "javascript:alert",
    "data:text/html,hello",
    "//external.com",
    "https://example.com\nscript",
  ])
    assert.equal(isSafeEditorLink(href), false);
  const answer = "[unsafe](javascript:alert) followed by [safe](/blog).";
  assert.deepEqual(
    parseFaqAnswer(answer)
      .filter((part) => part.href)
      .map((part) => part.href),
    ["/blog"],
  );
  assert.ok(faqAnswerText(answer).includes("[unsafe](javascript:alert)"));
});

test("link positions preserve exact text when unlinking", () => {
  const answer = "Before [anchor text](https://example.com) after.";
  const link = parseFaqAnswer(answer).find((part) => part.href)!;
  assert.equal(
    answer.slice(0, link.start) + link.text + answer.slice(link.end),
    "Before anchor text after.",
  );
});
