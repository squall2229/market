const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..', '..');

module.exports = {
  version: '1.0.0',
  port: process.env.PORT || 3000,
  sessionSecret: 'HacJmB3ma6crKKtK',
  jwtSecret: 'pxJLp4EN83sIjav34Si3hn3hvLtiuY',
  mongodbUri: {
    development: process.env.MONGODB_MLABURL
  },
  paths: {
    views: path.resolve(ROOT_PATH, 'shared', 'views'),
    public: path.resolve(ROOT_PATH, 'shared', 'public'),
    lib: path.resolve(ROOT_PATH, 'node_modules')
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