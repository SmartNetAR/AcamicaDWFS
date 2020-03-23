//paquetes necesarios para el proyecto
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const peliculas = require('./controladores/peliculas.js')

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
const puerto = '8080';

app.get("/peliculas", peliculas.mostrarPeliculas)


app.listen(puerto, function () {
    console.log("Escuchando en el puerto " + puerto);
});