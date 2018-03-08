const express = require('express');
const path = require('path');

const middleware = require('./middleware');
const routers = require('./routers');

const main = express();

main.set('views', path.join(__dirname, 'views'));
main.set('view engine', 'pug');

main.on('mount', main => {
  main.locals = Object.assign(main.locals, main.locals);
});

main.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

main.use('/', routers.main);
main.use('/auth', routers.auth);
main.use('/checkout', routers.checkout);
main.use('/about', routers.about);
main.use('/delivery', routers.delivery);
main.use('/user', middleware.auth.authenticated, routers.user);

module.exports = main;