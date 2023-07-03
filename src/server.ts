import fastify from 'fastify'
import { env } from './env'
import { transactions } from './routes/transactions'
const app = fastify()

app.register(transactions)

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log('Server Running!'))
