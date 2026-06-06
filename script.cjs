const fs = require('fs');
const path = require('path');
const dir = 'app/legal-documents';
const dirs = fs.readdirSync(dir);
dirs.forEach(d => {
  const p = path.join(dir, d, 'page.tsx');
  if (fs.existsSync(p)) {
    let c = fs.readFileSync(p, 'utf8');
    c = c.replaceAll('className="ml-18 max-w-230"', 'className="max-w-230 lg:ml-18"');
    c = c.replaceAll('className="mx-20 max-w-230"', 'className="max-w-230 lg:ml-18"');
    c = c.replaceAll('className="mx-18 max-w-230"', 'className="max-w-230 lg:ml-18"');
    fs.writeFileSync(p, c);
  }
});
