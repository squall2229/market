const { tshirt: Tshirt } = require('../../shared/models');

module.exports = {
  tshirts: {
    // GET /api/tshirts
    get(req, res, next) {
      Tshirt.find()
        .then(tshirts => res.status(200).json(tshirts))
        .catch(next);
    },

    // POST /api/tshirts
    post(req, res, next) {
      Tshirt.create(req.body)
        .then(tshirt => res.status(201).json(tshirt))
        .catch(next);
    }
  },

  tshirt: {
    find(req, res, next, id) {
      Tshirt.findById(id)
        .then(tshirt => {
          if (!tshirt) return res.sendStatus(404);
          req.tshirt = tshirt;
          next();
        })
        .catch(next)
    },

    // GET /api/tshirts/:id
    get(req, res) {
      res.send(req.tshirt)
    },

    // PUT /api/tshirts/:id
    put(req, res, next) {
      req.tshirt = Object.assign(req.tshirt, req.body);

      req.tshirt.save()
        .then(tshirt => res.status(200).json(tshirt))
        .catch(next)
    },

    delete(req, res, next) {
      req.tshirt.remove()
        .then(() => res.sendStatus(204))
        .catch(next)
    },

    price: {
      put(req, res, next) {
        req.tshirt.price = req.body.price;

        req.tshirt.save()
          .then(tshirt => res.status(201).json(tshirt.price))
          .catch(next)
      }
    }
  }
}