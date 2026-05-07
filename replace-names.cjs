const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetString1 = "Jonathan Jimenez Escobar";
const targetString2 = "Jonatan Jimenez Escobar";
const replacementString = "Jonatan Jimenez escobar";

const copyrightRegex1 = /© 2026 Desarrollado y Creado por (Jonathan|Jonatan) Jimenez [Ee]scobar\. Todos los derechos reservados\./g;
const copyrightRegex2 = /© 2026 Developed and Created by (Jonathan|Jonatan) Jimenez [Ee]scobar\. All rights reserved\./g;
const replacementCopyright = "creada en 2026 Jonatan Jimenez escobar";

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace copyright strings first
    content = content.replace(copyrightRegex1, replacementCopyright);
    content = content.replace(copyrightRegex2, replacementCopyright);
    
    // Replace any remaining names
    content = content.replace(new RegExp(targetString1, 'g'), replacementString);
    content = content.replace(new RegExp(targetString2, 'g'), replacementString);
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
