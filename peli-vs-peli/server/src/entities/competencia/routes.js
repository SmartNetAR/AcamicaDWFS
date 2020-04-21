const express = require("express");
const router = express.Router();
const controller = require("./controller.js");
const middlewares = require("./middlewares");

router.get("/", controller.getAll);
router.get("/:id/peliculas", controller.getMovies)
router.post("/:id/voto", middlewares.votar, controller.votar);

module.exports = router;