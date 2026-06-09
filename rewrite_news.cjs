const fs = require('fs');
const path = require('path');
const file = 'app/cms/news/page.tsx';

let content = fs.readFileSync(file, 'utf8');

content = content.replace(/import type \{ BlogFaq, BlogPost, BlogStatus \} from "@\/lib\/blogs";/g, 'import type { NewsCategory, NewsPost, NewsStatus } from "@/lib/news";');
content = content.replace(/faqs: BlogFaq\[\];/g, 'categoryId: string | null;');
content = content.replace(/faqs: \[\]/g, 'categoryId: null');
content = content.replace(/BlogStatus/g, 'NewsStatus');
content = content.replace(/BlogPost/g, 'NewsPost');
content = content.replace(/BlogFaq/g, 'NewsCategory');
content = content.replace(/Blog/g, 'News');
content = content.replace(/blog/g, 'news');
content = content.replace(/BLOG/g, 'NEWS');
content = content.replace(/faqs/g, 'categoryId');
content = content.replace(/const completeFaqs = useMemo\(\(\) => cleanFaqs\(form\.categoryId\), \[form\.categoryId\]\);/g, '');
content = content.replace(/cleanFaqs\(form\.categoryId\)/g, 'form.categoryId');
content = content.replace(/JSON\.stringify\(form.categoryId\)/g, 'form.categoryId');

// Some specific fixups for category dropdown
// I will just replace the whole FAQ section with a Category selector
const faqSectionRegex = /<div className="rounded-\[10px\] border border-border bg-white p-5 shadow-\[0_14px_40px_rgba\(10,17,40,0\.04\)\]">[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>/m;
content = content.replace(/<div className="rounded-\[10px\] border border-border bg-white p-5 shadow-\[0_14px_40px_rgba\(10,17,40,0\.04\)\]">[\s\S]*?(?=<\/form>|<\/div>      <\/div>\s*<\/div>\s*<\/div>)/g, `
<div className="rounded-[10px] border border-border bg-white p-5 shadow-[0_14px_40px_rgba(10,17,40,0.04)]">
  <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
    <div>
      <label className="block text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">
        Category
      </label>
      <p className="mt-1 text-sm text-ink-muted">
        Select a category for this news article.
      </p>
    </div>
  </div>
  <select
    value={form.categoryId || ""}
    onChange={(event) => setForm(current => ({ ...current, categoryId: event.target.value || null }))}
    className="h-14 w-full rounded-[8px] border border-border bg-white px-4 text-base font-medium outline-none transition-colors focus:border-accent"
  >
    <option value="">No Category</option>
    {categories.map(cat => (
      <option key={cat.id} value={cat.id}>{cat.name}</option>
    ))}
  </select>
</div>
`);

content = content.replace(/const \[newss, setNewss\]/g, 'const [newsItems, setNewsItems]');
content = content.replace(/newss\.map/g, 'newsItems.map');
content = content.replace(/newss\.find/g, 'newsItems.find');
content = content.replace(/newss\.reduce/g, 'newsItems.reduce');
content = content.replace(/newss\.length/g, 'newsItems.length');
content = content.replace(/newss\.filter/g, 'newsItems.filter');
content = content.replace(/setNewss/g, 'setNewsItems');
content = content.replace(/const newss = /g, 'const newsItems = ');
content = content.replace(/newss,/g, 'newsItems,');
content = content.replace(/\[newss\]/g, '[newsItems]');
content = content.replace(/\[newss,/g, '[newsItems,');
content = content.replace(/, newss\]/g, ', newsItems]');

fs.writeFileSync(file, content);
