import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/vue-amplitude.js',
    format: 'cjs',
    name: 'VueAmplitude',
  },
  plugins: [terser()],
};
