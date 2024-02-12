import fs from 'fs';
import resolve from '@rollup/plugin-node-resolve';
import {runtimeTypeInspector} from '@runtime-type-inspector/plugin-rollup';
import {dirname, join       } from 'path';
import {fileURLToPath       } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const banner = fs.readFileSync(join(__dirname, 'licenses.txt'));
const targetUMD = {
  input: 'src/index.js',
  output: {
    file: './dist/cardboard-vr-display.js',
    format: 'umd',
    name: 'CardboardVRDisplay',
  },
  banner,
  plugins: [
    resolve(),
  ]
};
const targetESM = {
  input: 'src/index.js',
  output: {
    file: './dist/cardboard-vr-display.mjs',
    format: 'es',
    name: 'CardboardVRDisplay',
  },
  banner,
  plugins: [
    resolve(),
  ]
};
const targetRTI = {
  input: 'src/index-rti.js',
  output: {
    file: './dist/cardboard-vr-display-rti.mjs',
    format: 'es'
  },
  banner,
  plugins: [
    resolve(),
    runtimeTypeInspector({
      ignoredFiles: [
        'node_modules',
      ]
    }),
  ]
};
const targets = [targetUMD, targetESM, targetRTI];
export default targets;
