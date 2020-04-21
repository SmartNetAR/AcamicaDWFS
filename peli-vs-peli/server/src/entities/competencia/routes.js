const express = require("express");
const router = express.Router();
const controller = require("./controller.js")

router.get("/", controller.getAll);
router.get("/:id/peliculas", controller.getMovies)
router.post("/:id/voto", controller.votar);

module.exports = router;