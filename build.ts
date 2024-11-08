import {autoload} from 'esbuild-plugin-autoload' // default import also supported

await Bun.build({
  entrypoints: ['src/index.ts'],
  target: 'bun',
  outdir: 'out',
  plugins: [autoload({directory: 'src/routes'})],
}).then(console.log)
