const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config()

const moviesRouter = require("./routes/api/movies")

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/movies', moviesRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const {status = 500, message} = err;
  res.status(status).json({ message, })
})

module.exports = app
