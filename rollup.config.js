import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

import packageJson from "./package.json" assert { type: "json" };

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            exports: 'default',
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve({
            extensions: ['.js', '.ts', '.tsx'],
        }),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
        terser(),
        postcss({
            extensions: ['.css'],
        })
    ],
    external: ["react", "react-dom"],
}

