
require('dotenv').config();
const app = require("./server/server.js");
const cors = require('cors')
const morgan = require("morgan");

app.use(cors());

app.use(morgan("dev"));
const routes = require("./routes.js")
routes(app);
app.use("/", (req, res, next) => {
    res.json("la ruta no existe");
});