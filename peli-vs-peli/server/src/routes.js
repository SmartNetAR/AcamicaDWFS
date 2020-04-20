const competencia = require( "./entities/competencia/routes.js")

const routes = ( app ) => {
    app.use("/competencias", competencia);
}

module.exports = routes;