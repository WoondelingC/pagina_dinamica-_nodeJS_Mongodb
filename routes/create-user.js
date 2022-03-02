const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* Crear nuevo usuario */
router.get('/', async(req, res, next) => {
    res.render('home')
});

router.post('/', async (req, res) => {
  const gamer = req.body;
  
  try {
      const player = new User(gamer)
      await player.save()
      res.redirect('/gamer')
  } 
  catch (error) {
      console.log('error', error)
  }
})

module.exports = router;
