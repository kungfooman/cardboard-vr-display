/**
 * @param {string} content - The content.
 * @returns {string} data:text string
 */
function importFile(content) {
  return "data:text/javascript;base64," + btoa(content);
}
const imports = {
  'three': '../node_modules/three/build/three.module.js',
  // Straight from source.
  //'cardboard-vr-display': '../src/index.js',
  // ESM build
  //'cardboard-vr-display': '../dist/cardboard-vr-display.mjs',
  // ESM build with Runtime Type Inspector validations
  'cardboard-vr-display': '../dist/cardboard-vr-display-rti.mjs',
  "fs": importFile("export default {};"),
};
const importmap = document.createElement("script");
importmap.type = "importmap";
importmap.textContent = JSON.stringify({imports});
const dom = document.body || document.head;
if (!dom) {
  throw new Error("neither <body> nor <head> available to append importmap");
}
dom.append(importmap);
