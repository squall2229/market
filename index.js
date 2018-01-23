const express = require('express');
const path = require('path');
const logger = require('morgan');

const db = require('./services/db');
const config = require('./config');
const { error } = require('./middleware');
const routers = require('./routers');
const admin = require('./admin');

const app = express();

app.set('view engine', 'pug');
app.set('views', config.paths.views);
app.set('config', config);

app.locals.version = config.version;
app.locals.basedir = config.paths.views;

app.use(express.static(config.paths.public));
app.use('/lib', express.static(config.paths.lib));
app.use(express.urlencoded({ extended: false }));

app.use(logger('dev'));

app.use('/', routers.main);

app.use('/user', routers.user);
app.use('/checkout', routers.checkout);
app.use('/about', routers.about);
app.use('/delivery', routers.delivery);
app.use('/auth', routers.auth);
app.use('/admin', admin);

app.use(error.notFound);
app.use(app.get('env') === 'development' ? error.development : error.production);

app.listen(config.port, () => console.log('Express:', config.port));