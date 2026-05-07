import fs from 'fs';
import path from 'path';

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace 2023, 2024, 2025 with 2026, EXCEPT when preceded by CVE- or INV- or FS-
  // Negative lookbehind is supported in modern JS: /(?<!CVE-|INV-|FS-)(2023|2024|2025)/g
  const regex = /(?<!CVE-|INV-|FS-)(2023|2024|2025)/g;
  
  if (regex.test(content)) {
    content = content.replace(regex, '2026');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated dates in ${file}`);
  }
});
