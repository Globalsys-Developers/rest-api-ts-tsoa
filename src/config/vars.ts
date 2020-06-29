require('dotenv-safe').config()

const variables: any = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  dbConnectionURI:  process.env.DB_CONNECTION_URI || 'postgresql://localhost:5433'
}

export { variables }
