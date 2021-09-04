import styles from "rollup-plugin-styles";
import image from 'rollup-plugin-img';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
    input: './src/index.js',
    output: {
        file: './build/bundle.js',
        format: 'cjs'
    },
    plugins: [
        styles(),
        image({
            limit: 10000000
        }),
        babel({ babelHelpers: 'bundled' }),
        serve({
            open: true,
            contentBase: './'
        }),
        livereload()
    ]
};