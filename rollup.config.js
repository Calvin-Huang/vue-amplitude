import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/vue-amplitude.js',
    format: 'iife',
    name: 'VueAmplitude',
  },
  plugins: [terser()],
};