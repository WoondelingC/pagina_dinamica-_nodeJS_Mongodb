// Libraries
const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* Cambio total a un usuario */
router.put('/:id', function (req, res, next) {

  User.findByIdAndUpdate(req.params.id, {
    gamer: req.body.gamer,
    bet: req.body.bet
  })
    .then((result) => { res.json(result) })
    .catch((err) => { res.json(err) });

});

module.exports = router;
