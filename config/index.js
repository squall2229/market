const path = require('path');

module.exports = {
  version: '1.0.0',
  port: process.env.PORT || 3000,
  sessionSecret: 'HacJmB3ma6crKKtK',
  mongodbUri: {
    development: process.env.MONGODB_MLABURL
  },
  paths: {
    views: path.resolve(__dirname, '..', 'views'),
    public: path.resolve(__dirname, '..', 'public'),
    lib: path.resolve(__dirname, '..', 'node_modules')
  },
  oauth: {
    github: {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL
    },
    vk: {
      clientID: process.env.VK_CLIENT_ID,
      clientSecret: process.env.VK_CLIENT_SECRET,
      callbackURL: process.env.VK_CALLBACK_URL
    }
  }
};