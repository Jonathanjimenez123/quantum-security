const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Replace style={{ backgroundImage: 'url("https://picsum.photos/seed/user/200/200")' }}
      // with style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://picsum.photos/seed/user/200/200'}")` }}
      const regex1 = /style=\{\{\s*backgroundImage:\s*['"]url\(['"]https:\/\/picsum\.photos\/seed\/user\/200\/200['"]\)['"]\s*\}\}/g;
      if (regex1.test(content)) {
        content = content.replace(regex1, 'style={{ backgroundImage: `url("${auth.currentUser?.photoURL || \'https://picsum.photos/seed/user/200/200\'}")` }}');
        changed = true;
      }

      // Replace src="https://picsum.photos/seed/user/200/200"
      // with src={auth.currentUser?.photoURL || "https://picsum.photos/seed/user/200/200"}
      const regex2 = /src=["']https:\/\/picsum\.photos\/seed\/user\/200\/200["']/g;
      if (regex2.test(content)) {
        content = content.replace(regex2, 'src={auth.currentUser?.photoURL || "https://picsum.photos/seed/user/200/200"}');
        changed = true;
      }

      if (changed) {
        // Ensure auth is imported
        if (!content.includes("import { auth } from '../firebase'") && !content.includes("import { auth } from './firebase'") && !content.includes("import { auth, db } from '../firebase'")) {
            if (fullPath.includes('src/components/')) {
                content = "import { auth } from '../firebase';\n" + content;
            } else {
                content = "import { auth } from './firebase';\n" + content;
            }
        }
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
console.log('Done replacing images.');
