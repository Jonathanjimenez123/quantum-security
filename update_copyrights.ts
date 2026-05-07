import fs from 'fs';
import path from 'path';

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const newCopyright = '© 2026 Developed and Created by Jonathan Jimenez Escobar. All rights reserved.';

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  let modified = false;

  // Replace © YYYY [Company] with the new copyright
  const regex1 = /©\s*\d{4}\s+[^<]+All rights reserved\.?/gi;
  if (regex1.test(content)) {
    content = content.replace(regex1, newCopyright);
    modified = true;
  }

  const regex2 = /©\s*\d{4}\s+[^<]+/gi;
  if (!modified && regex2.test(content)) {
    content = content.replace(regex2, (match) => {
        if (match.includes('All rights reserved')) return newCopyright;
        if (match.includes('PhishGuard') || match.includes('Security') || match.includes('Shield') || match.includes('SecureGuard') || match.includes('SecureBrowse') || match.includes('Sentinel')) return newCopyright;
        return match;
    });
    modified = true;
  }
  
  const regex3 = /Copyright\s*©\s*[\d-]+\s+[^<]+/gi;
  if (regex3.test(content)) {
    content = content.replace(regex3, newCopyright);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
