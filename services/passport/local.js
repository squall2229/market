const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

const { user: User } = require('../../models');

const options = {
  usernameField: 'email',
  passwordFiled: 'password',
  passReqToCallback: true
}

passport.use('local-register', new LocalStrategy(options, (req, email, password, done) => {
  let { name, surname, age, confirmPassword } = req.body;
  if (password !== confirmPassword) return done(new Error('Пароли не совпадают'));

  User.create({ email, password, name, surname, age })
    .then(user => done(null, user))
    .catch(done);
}));

passport.use('local-login', new LocalStrategy(options, (req, email, password, done) => {
  User.findOne({ email })
    .then(user => {
      if (!user) return done(null, false);
      user.isCorrectPassword(password)
        .then(isEqual => {
          if (!isEqual) return done(null, false);

          done(null, user)
        })
        .catch(done)
    })
    .catch(done)
}));