const passport = require('passport');
const { Strategy: VKontakteStrategy } = require('passport-vkontakte');
const { user: User } = require('../../models');

const config = require('../../config');

passport.use(new VKontakteStrategy(config.oauth.vk, (accessToken, refreshToken, params, profile, done) => {
  let username = profile.username;
  let photo = profile.photos[0].value;
  let name = profile.displayName.split(' ')[0];
  let surname = profile.displayName.split(' ')[1];

  User.findOneAndUpdate({ username }, { 
    name, 
    surname,
    username,
    photo
  }, { upsert: true, new: true }, done)
}));