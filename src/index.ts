import {resolveSync} from 'bun'
import {Elysia, NotFoundError, t} from 'elysia'
import {autoload} from 'elysia-autoload'

const app = new Elysia()
  // .use(
  //   await autoload({
  //     dir: './routes',
  //     prefix: '/api',
  //   }),
  // )
  .listen(4000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)

export type ElysiaApp = typeof app
