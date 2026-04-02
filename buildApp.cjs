const fs = require('fs');
const https = require('https');
const path = require('path');

let html = fs.readFileSync('rendered.html', 'utf8');

const startStr = '<div id="root">';
let inner = html.substring(html.indexOf(startStr) + startStr.length);

let asideIdx = inner.indexOf('<aside id="lovable-badge"');
if (asideIdx !== -1) {
    inner = inner.substring(0, asideIdx);
}
let endIdx = inner.lastIndexOf('</div>');

let jsx = inner.substring(0, endIdx).trim();

// Replacements
jsx = jsx.replace(/class="/g, 'className="');
jsx = jsx.replace(/for="/g, 'htmlFor="');
jsx = jsx.replace(/tabindex="/g, 'tabIndex="');
jsx = jsx.replace(/stroke-width="/g, 'strokeWidth="');
jsx = jsx.replace(/stroke-linecap="/g, 'strokeLinecap="');
jsx = jsx.replace(/stroke-linejoin="/g, 'strokeLinejoin="');
jsx = jsx.replace(/fill-rule="/g, 'fillRule="');
jsx = jsx.replace(/clip-rule="/g, 'clipRule="');
jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

// Fix style objects
jsx = jsx.replace(/style="([^"]+)"/g, (match, styleString) => {
    const rules = styleString.split(';').filter(s => s.trim().length > 0);
    const styleObj = {};
    rules.forEach(rule => {
        const parts = rule.split(':');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const val = parts.slice(1).join(':').trim();
            const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
            styleObj[camelKey] = val;
        }
    });
    return `style={${JSON.stringify(styleObj)}}`;
});

// Self closing tags
const tags = ['img', 'input', 'hr', 'br'];
tags.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)>`, 'g');
    jsx = jsx.replace(regex, (m, attrs) => {
        if (m.endsWith('/>')) return m;
        return `<${tag}${attrs} />`;
    });
});

// Fix attributes with dashes
jsx = jsx.replace(/aria-relevant="/g, 'ariaRelevant="');

const appCode = `import './index.css';

export default function App() {
  return (
    <>
${jsx}
    </>
  );
}
`;

fs.writeFileSync('src/App.jsx', appCode);
console.log('App.jsx created');

const publicAssetsDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(publicAssetsDir)) {
    fs.mkdirSync(publicAssetsDir, { recursive: true });
}

const file = fs.createWriteStream(path.join(publicAssetsDir, 'hero-bg-CvAkT_G8.jpg'));
https.get("https://shark-tank-signup.lovable.app/assets/hero-bg-CvAkT_G8.jpg", function(response) {
  response.pipe(file);
});
console.log('Asset download started');
