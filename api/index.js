const express = require('express');

const api = express();

const { tshirt: tshirtController } = require('./controllers');

const routers = require('./routers');

api.use('/tshirts', routers.tshirt)

api.use((error, req, res, next) => {
  res.status(200).json(error)
})

module.exports = api;