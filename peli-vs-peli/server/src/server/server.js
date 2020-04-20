const express = require("express");
const config = require("../config/config.js");

const app = express();
app.listen( config.port , ()=> console.log(`Corriendo en el puerto ${config.port}`));

module.exports = app;