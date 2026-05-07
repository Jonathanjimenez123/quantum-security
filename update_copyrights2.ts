import fs from 'fs';
import path from 'path';

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const newCopyright = '© 2026 Developed and Created by Jonathan Jimenez Escobar. All rights reserved.';

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  let modified = false;

  const regex4 = /SecureGuard AI © \d{4}\./gi;
  if (regex4.test(content)) {
    content = content.replace(regex4, newCopyright);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
