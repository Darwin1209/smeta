const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const api = require('./api')

const PORT = 3030

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', api)

async function start() {
  try {
    await mongoose.connect('mongodb://localhost/smeta', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    app.listen(PORT, function () {
      console.log('Server is running in ' + PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
