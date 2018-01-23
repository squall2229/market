const path = require('path');

module.exports = {
    version: '1.0.0',
    port: process.env.PORT || 3000,
    mongodbUri: {
      development: 'mongodb://squall2229:Finalfantasy8@ds253587.mlab.com:53587/marketo'
    },
    paths: {
      views: path.resolve(__dirname, '..', 'views'),
      public: path.resolve(__dirname, '..', 'public'),
      lib: path.resolve(__dirname, '..', 'node_modules')
    }
};