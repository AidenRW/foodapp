module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/foodapp-dev'
  },
  test: {},
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
