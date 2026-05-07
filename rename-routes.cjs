const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = {
  '/dashboard': '/panel',
  '/settings': '/ajustes',
  '/history': '/informes',
  '/scanner': '/escaner',
  '/safelist': '/sitios-confiables',
  '/insights': '/configuracion-ia',
  '/help-center': '/centro-ayuda',
  '/incident-report': '/reporte-incidente',
  '/user-profile': '/perfil-usuario',
  '/interactive-training': '/entrenamiento-interactivo',
  '/pricing': '/precios',
  '/landing-page': '/inicio'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  for (const [oldRoute, newRoute] of Object.entries(replacements)) {
    // Replace exact matches in quotes
    const regex1 = new RegExp(`['"]${oldRoute}['"]`, 'g');
    if (regex1.test(content)) {
      content = content.replace(regex1, `'${newRoute}'`);
      modified = true;
    }
    
    // Replace exact matches in <Link to="...">
    const regex2 = new RegExp(`to=["']${oldRoute}["']`, 'g');
    if (regex2.test(content)) {
      content = content.replace(regex2, `to="${newRoute}"`);
      modified = true;
    }
    
    // Replace exact matches in Route path="..."
    // Note: in App.tsx, paths might not have leading slash, e.g., path="dashboard"
    const oldPathNoSlash = oldRoute.substring(1);
    const newPathNoSlash = newRoute.substring(1);
    const regex3 = new RegExp(`path=["']${oldPathNoSlash}["']`, 'g');
    if (regex3.test(content)) {
      content = content.replace(regex3, `path="${newPathNoSlash}"`);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated routes in ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walkDir(srcDir);
console.log('Done replacing routes');
