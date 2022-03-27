import {build} from 'estrella'
import {Generator} from 'npm-dts'

build({
  entry: ['src/main.ts', 'src/cli.ts'],
  outdir: 'dist',
  bundle: true,
  minify: true,
  format: 'cjs',
  platform: 'node',
  sourcemap: 'external'
})

// https://souporserious.com/bundling-typescript-with-esbuild-for-npm/
new Generator({
  entry: 'src/main.ts',
  output: 'dist/main.d.ts',
}).generate()
