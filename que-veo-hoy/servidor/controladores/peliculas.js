const mysql = require('../lib/conexionbd.js')
exports.mostrarPeliculas = ( req, res ) => {

  res.json({peliculas: []});
}