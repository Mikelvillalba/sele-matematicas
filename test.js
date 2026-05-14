const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const dom = new JSDOM(html, { runScripts: 'dangerously', resources: "usable" });
const window = dom.window;

// Mock localStorage
window.localStorage = {
  getItem: () => null,
  setItem: () => {}
};

setTimeout(() => {
  const dot = window.document.querySelector('.dot[data-status="3"]');
  if (dot) {
    dot.click();
    console.log('Dot clicked! Card class:', dot.closest('.card').className);
    console.log('Status indicator class:', dot.closest('.card').querySelector('.status-indicator').className);
  } else {
    console.log('No dot found');
  }
}, 2000);
