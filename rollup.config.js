import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default defineConfig({
  input: './src/index.ts',
  output: [
    { file: 'dist/es/index.js', format: 'es', },
    { file: 'dist/es/index.min.js', format: 'es', plugins: [terser({})], },
    { file: 'dist/umd/index.js', format: 'umd', name: 'stripJsonComments' },
    { file: 'dist/umd/index.min.js', format: 'umd', plugins: [terser()], name: 'stripJsonComments' },
    { file: 'dist/iife/index.js', format: 'iife', name: 'stripJsonComments' },
    { file: 'dist/iife/index.min.js', format: 'iife', plugins: [terser()], name: 'stripJsonComments' },
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
      useTsconfigDeclarationDir: true,
    }),
  ]
})
