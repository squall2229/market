const express = require('express');
const path = require('path');
const itemsRouter = require('./routers/items');
const mainRouter = require('./routers/main');
const registrationRouter = require('./routers/registration');
const userRouter = require('./routers/user');
const checkoutRouter = require('./routers/checkout');

const server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.use('/', mainRouter);

server.use('/items', itemsRouter);
server.use('/registration', registrationRouter);
server.use('/user', userRouter);
server.use('/checkout', checkoutRouter);

server.listen(3000, () => console.log('Express', 3000));