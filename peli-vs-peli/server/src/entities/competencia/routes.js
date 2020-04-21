const express = require("express");
const router = express.Router();
const { getAll, getMovies, votar } = require("./controller.js");
const middlewares = require("./middlewares");

router.get("/", getAll);
router.get("/:id/peliculas", getMovies)
router.post("/:id([0-9]+)/voto", middlewares.votar, votar);

module.exports = router;