const { passport } = require('../services');

module.exports = {
  github: {
    authenticate: passport.authenticate('github'),
    callback: passport.authenticate('github', {
      failureRedirect: '/auth/login',
      successRedirect: '/user'
    })
  },

  vk: {
    authenticate: passport.authenticate('vkontakte'),
    callback: passport.authenticate('vkontakte', {
      failureRedirect: '/auth/login',
      successRedirect: '/user'
    })
  }
};