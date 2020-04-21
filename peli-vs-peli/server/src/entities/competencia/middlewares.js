const middlewares = {
    votar: ( req, res, next ) => {
        if ( !req.body.idPelicula ) {
            return res.status( 422 ).json("no se ha indicado el campo idPelicula");
        }

        return next();
    }
}

module.exports = middlewares;