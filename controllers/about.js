module.exports = {
  showAbout(req, res) {
    res.render('about/about', { title: 'Контакты', id: 'about' });
  }
}