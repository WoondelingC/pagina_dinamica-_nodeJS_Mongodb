// Libraries
const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* Cambios parciales a un usuario */
router.patch('/gamer/:id', function (req, res, next) {

  User.findByIdAndUpdate(req.params.id, { gamer: req.body.gamer })
    .then((result) => { res.json(result) })
    .catch((err) => { res.json(err) });

});

router.patch('/bet/:id', function (req, res, next) {

  User.findByIdAndUpdate(req.params.id, { bet: req.body.bet })
    .then((result) => { res.json(result) })
    .catch((err) => { res.json(err) });

});

module.exports = router;
