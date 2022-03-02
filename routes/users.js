// Libraries
const express = require("express");
const router = express.Router();

const User = require("../models/user");

/* Listar todos los usuarios */
router.get("/", async (req, res, next) => {
  
  try {
      const arrayPlayers = await User.find();
      res.render('gamers', {
        players: arrayPlayers
      });
  } 
  catch (error) {
      console.log(error);
  }

});

module.exports = router;
