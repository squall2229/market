const passport = require('passport');
const { Strategy: GithubStrategy } = require('passport-github');
const { user: User } = require('../../models');

const config = require('../../config');

passport.use(new GithubStrategy(config.oauth.github, (accessToken, refreshToken, profile, done) => {
  if (!profile.emails) return done(new Error('Для входа необходимо получить от Github email'))

  let email = profile.emails[0].value;
  let username = profile.username;
  let photo = profile.photos[0].value;
  let name = profile.displayName.split(' ')[0];
  let surname = profile.displayName.split(' ')[1];

  User.findOneAndUpdate({ email }, { 
    email, 
    name, 
    surname,
    username,
    photo
  }, { upsert: true, new: true }, done)
}));