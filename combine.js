const fs = require('fs');
const path = require('path');

const basePath = 'c:/Users/mikel/Desktop/Sele Matematicas';

const dataPath = path.join(basePath, 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

const years = ['2021', '2022', '2023', '2024'];
let newContent = '';

for (const year of years) {
  const p = path.join(basePath, `scratch_${year}.js`);
  if (fs.existsSync(p)) {
    newContent += fs.readFileSync(p, 'utf8') + '\n\n';
  }
}

// Replace the placeholder comment with the new content
const placeholder = `// -----------------------------------------------------------------------------------------
// NOTA IMPORTANTE PARA EL USUARIO:
// Por favor, PEGA AQUÍ los bloques de código JavaScript que fuimos generando en el chat
// para las convocatorias de 2021, 2022, 2023 y 2024.
// -----------------------------------------------------------------------------------------`;

dataContent = dataContent.replace(placeholder, newContent);

fs.writeFileSync(dataPath, dataContent, 'utf8');
console.log('Successfully injected 2021-2024 data into data.js');
