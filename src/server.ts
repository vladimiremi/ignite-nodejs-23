import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { transactions } from './routes/transactions'
const app = fastify()

app.register(cookie)

app.register(transactions, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log('Server Running!'))
