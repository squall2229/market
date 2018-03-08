const { passport } = require('../../shared/services');

module.exports = {
  github: {
    authenticate: passport.authenticate('github'),
    callback: passport.authenticate('github', {
      failureRedirect: '/auth/login',
      successRedirect: '/user'
    })
  },

  vk: {
    authenticate: passport.authenticate('vkontakte', {
      scope: ['status', 'email', 'friends', 'notify']
    }),
    callback: passport.authenticate('vkontakte', {
      failureRedirect: '/auth/login',
      successRedirect: '/user'
    })
  }
};