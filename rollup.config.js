import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';

export default [
	// browser-friendly UMD build
	{
		input: 'src/index.js',
		output: {
		  name: 'Rouge',
		  file: 'dist/rouge.umd.min.js',
		  format: 'umd'
		},
		plugins: [
          json(),
		  resolve(),
		  commonjs(),
          terser()
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	{
		input: 'src/index.js',
		external: ['ms'],
		plugins: [
          json(),
		],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
