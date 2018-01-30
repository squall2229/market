const { user: User } = require('../models');

module.exports = {
  showLogin(req, res) {
    res.render('auth/login', { 
      title: 'Авторизация', 
      id: 'login' 
    });
  },

  showRegister(req, res) {
    res.render('auth/register', { 
      title: 'Регистрация', 
      id: 'register' 
    });
  },

  register(req, res, next) {
    let { email, password, confirmPassword, name, surname, age } = req.body;

    if (!email || !password) return next(new Error('Необходимо ввести email и пароль'));
    else if (password !== confirmPassword) return next (new Error('Пароли не совпадают'));

    User.create({ email, password, name, surname, age })
      .then(user => {
        req.session.userId = user.id;
        res.redirect('/user');
      })
      .catch(next);
  },

  login(req, res, next) {
    let { email, password } = req.body;
    console.log(email, password);
    
    if (!email || !password) {
      let error = new Error('Необходимо ввести логин и пароль');
      error.status = 401;
      return next(error);
    }

    User.authenticate(email, password)
      .then(user => {
        req.session.userId = user.id;
        res.redirect('/user');
      })
      .catch(next);
    },

    logout(req, res, next) {
      if (req.session) {
        req.session.destroy(error => {
          if (error) return next(error);

          res.redirect('/');
        });
      }
    }
}