import resolve from 'rollup-plugin-node-resolve'

export default {
    input: 'src/entry.js',
    output: {
        file: 'dist/bundle.js',
        format: 'esm'
    },
    plugins: [
        resolve()
    ]
}