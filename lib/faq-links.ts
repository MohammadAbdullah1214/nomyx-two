/** FAQ links use a small, safe Markdown subset; legacy plain text stays plain text. */
export function isSafeEditorLink(value: string) {
  return (
    /^(https?:\/\/|mailto:|tel:|\/(?!\/)|#)/i.test(value) &&
    !/[\u0000-\u0020<>]/.test(value)
  );
}

export function parseFaqAnswer(answer: string) {
  const parts: { text: string; href?: string; start: number; end: number }[] =
    [];
  const pattern = /\[([^\]\n]+)\]\(([^\s)]+)\)/g;
  let cursor = 0;
  for (const match of answer.matchAll(pattern)) {
    const start = match.index!;
    if (!isSafeEditorLink(match[2])) continue;
    if (start > cursor)
      parts.push({
        text: answer.slice(cursor, start),
        start: cursor,
        end: start,
      });
    parts.push({
      text: match[1],
      href: match[2],
      start,
      end: start + match[0].length,
    });
    cursor = start + match[0].length;
  }
  if (cursor < answer.length)
    parts.push({
      text: answer.slice(cursor),
      start: cursor,
      end: answer.length,
    });
  return parts;
}

export const faqAnswerText = (answer: string) =>
  parseFaqAnswer(answer)
    .map((part) => part.text)
    .join("");
