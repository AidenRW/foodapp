const express = require('express')
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')


app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const routes = require('./server/src/routes/food.js')

app.use(express.static('public'))

app.use('/', routes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: '404 - Not Found!'}})
})

const listener = () => console.log(`Listening on port: ${port}!`)
app.listen(port, listener)


 module.exports = app;
