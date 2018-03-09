const express = require('express');
const passport = require('passport');
const cache = require('apicache').middleware;
const RateLimit = require('express-rate-limit');
const cors = require('cors');

const api = express();

const limit = new RateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 1, // limit each IP to 100 requests per windowMs
  delayMs: 0 // disable delaying - full speed until the max limit is reached
});

const routers = require('./routers');

api.use(cors());

api.use(routers.auth);
api.use(passport.authenticate('jwt', { session: false }));
api.use(limit);
api.use(cache('1 minute'));
api.use('/tshirts', routers.tshirt)

api.use((error, req, res, next) => {
  res.status(200).json(error)
})

module.exports = api;