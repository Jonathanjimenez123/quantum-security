const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('href="#"')) {
    return;
  }

  // Add Link import if not present
  if (!content.includes("import { Link } from 'react-router-dom'") && !content.includes('import { Link,')) {
    if (content.includes("import { useNavigate")) {
      content = content.replace("import { useNavigate", "import { useNavigate, Link");
    } else if (content.includes("import { useLocation")) {
      content = content.replace("import { useLocation", "import { useLocation, Link");
    } else if (content.includes("import { Routes")) {
      content = content.replace("import { Routes", "import { Routes, Link");
    } else if (content.includes("react-router-dom")) {
      content = content.replace(/import\s+{([^}]+)}\s+from\s+['"]react-router-dom['"];/, (match, p1) => {
        if (!p1.includes('Link')) {
          return `import { ${p1.trim()}, Link } from 'react-router-dom';`;
        }
        return match;
      });
    } else {
      // Add import after React import
      content = content.replace(/(import React.*?;\n)/, "$1import { Link } from 'react-router-dom';\n");
    }
  }

  // Replace <a ... href="#"> with <Link ... to="...">
  // We'll use a regex to find the <a> tags and map them to appropriate routes based on their text content if possible.
  
  const aTagRegex = /<a([^>]*)href="#"([^>]*)>(.*?)<\/a>/gs;
  
  content = content.replace(aTagRegex, (match, p1, p2, innerText) => {
    let route = '/dashboard'; // default
    const textLower = innerText.toLowerCase();
    
    if (textLower.includes('privacy') || textLower.includes('privacidad')) route = '/privacy-compliance';
    else if (textLower.includes('terms') || textLower.includes('términos')) route = '/terms-of-service';
    else if (textLower.includes('support') || textLower.includes('soporte') || textLower.includes('help') || textLower.includes('ayuda')) route = '/help-center';
    else if (textLower.includes('settings') || textLower.includes('configuración') || textLower.includes('ajustes')) route = '/settings';
    else if (textLower.includes('dashboard') || textLower.includes('panel')) route = '/dashboard';
    else if (textLower.includes('threat') || textLower.includes('amenaza') || textLower.includes('history') || textLower.includes('historial')) route = '/history';
    else if (textLower.includes('report') || textLower.includes('informe')) route = '/incident-report';
    else if (textLower.includes('pricing') || textLower.includes('precio')) route = '/pricing';
    else if (textLower.includes('feature') || textLower.includes('característica')) route = '/landing-page';
    else if (textLower.includes('login') || textLower.includes('iniciar sesión')) route = '/login';
    else if (textLower.includes('roi')) route = '/roi-analytics';
    else if (textLower.includes('alert')) route = '/security-alert-interface';
    else if (textLower.includes('policy') || textLower.includes('política') || textLower.includes('policies')) route = '/policy-manager';
    else if (textLower.includes('training') || textLower.includes('entrenamiento')) route = '/interactive-training';
    else if (textLower.includes('docs') || textLower.includes('documentación') || textLower.includes('api')) route = '/apidocumentation';
    else if (textLower.includes('status') || textLower.includes('estado')) route = '/system-status';
    else if (textLower.includes('profile') || textLower.includes('perfil')) route = '/user-profile';
    
    // If there's an onClick that prevents default, we can just keep it as a button or let Link handle it.
    // But Link is better.
    
    return `<Link${p1}to="${route}"${p2}>${innerText}</Link>`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
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

walkDir(componentsDir);
console.log('Done replacing href="#" with <Link>');
