
require('dotenv').config();
const express = require("express");
const app = require("./server/server.js");
const cors = require('cors')
const morgan = require("morgan");

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

const routes = require("./routes.js")

routes(app);
app.use("/", (req, res, next) => {
    res.json("la ruta no existe");
});