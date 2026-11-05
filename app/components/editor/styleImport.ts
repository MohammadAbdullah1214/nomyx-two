import {
  $isTextNode,
  ParagraphNode,
  TextNode,
  type DOMConversionMap,
} from "lexical";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";

/** Preserve inline typography through the HTML save/reopen round trip. */
export function createStyleImportMap(): DOMConversionMap {
  const defaults = [
    TextNode.importDOM(),
    ParagraphNode.importDOM(),
    HeadingNode.importDOM(),
    QuoteNode.importDOM(),
  ];
  const imports: DOMConversionMap = {};
  const tags = new Set(defaults.flatMap((map) => Object.keys(map ?? {})));
  for (const tag of tags) {
    imports[tag] = (element) => {
      // Some heading converters also match p/span conditionally. Keep fallback
      // importers instead of overwriting the standard paragraph/text converter.
      const candidates = defaults.flatMap((map) => {
        const conversion = map?.[tag]?.(element);
        return conversion ? [conversion] : [];
      });
      const original = candidates.sort((a, b) => b.priority - a.priority)[0];
      if (!original) return null;
      return {
        ...original,
        conversion: (dom) => {
          const converted = original.conversion(dom);
          if (!converted) return null;
          const style = (dom as HTMLElement).style;
          return {
            ...converted,
            forChild: (child, parent) => {
              const result = converted.forChild
                ? converted.forChild(child, parent)
                : child;
              if ($isTextNode(result) && style) {
                const merged = document.createElement("span").style;
                merged.cssText = result.getStyle();
                for (const property of [
                  "font-size",
                  "font-family",
                  "color",
                  "background-color",
                ]) {
                  const value = style.getPropertyValue(property);
                  if (value) merged.setProperty(property, value);
                }
                // Import callbacks run from ancestors to descendants, so the
                // closest declaration overrides previously inherited styles.
                result.setStyle(merged.cssText);
              }
              return result;
            },
          };
        },
      };
    };
  }
  return imports;
}
