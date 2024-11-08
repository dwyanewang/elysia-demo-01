import Elysia, {Context, NotFoundError, t} from 'elysia'
import {ElysiaApp} from '..'

export default (app: ElysiaApp) =>
  app.get(
    '/:path',
    () => {
      throw new NotFoundError('123132')
    },
    {
      params: t.Object({
        path: t.String(),
      }),
    },
  )
