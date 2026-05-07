const fs = require('fs');
const path = require('path');

const targetString = "Jonatan Jimenez escobar";
const replacementString = "Jonathan Jimenez escobar";

function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(targetString) || content.includes('Jonatan')) {
      content = content.replace(/Jonatan Jimenez escobar/g, replacementString);
      content = content.replace(/Jonatan/g, 'Jonathan');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        walkDir(fullPath);
      }
    } else {
      if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.cjs')) {
        replaceInFile(fullPath);
      }
    }
  }
}

walkDir('./src');
walkDir('./extension');
if (fs.existsSync('./index.html')) replaceInFile('./index.html');
if (fs.existsSync('./replace-names.cjs')) replaceInFile('./replace-names.cjs');
