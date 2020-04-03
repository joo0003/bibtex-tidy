/* jshint node: true, esversion: 6, unused: true */
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import dsv from '@rollup/plugin-dsv';
import typescript from '@rollup/plugin-typescript';
import { version } from './package.json';

const tsv = {
	processRow(row) {
		return [row.unicode, row.latex];
	}
};

const banner = `/**
 * bibtex-tidy v${version}
 * https://github.com/FlamingTempura/bibtex-tidy
 * 
 * DO NOT EDIT THIS FILE. This file is automatically generated 
 * using \`npm run build\`. Edit files in './src' then rebuild.
 **/`;

export default {
	input: 'src/index.ts',
	plugins: [typescript(), dsv(tsv), commonjs(), nodeResolve()],
	output: {
		name: 'bibtexTidy',
		file: 'bibtex-tidy.js',
		format: 'umd',
		banner
	}
};
