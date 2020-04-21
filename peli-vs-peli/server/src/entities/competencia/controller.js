const db = require("../../service/mysql.js")
const query = require("./query.js")

exports.getAll = ( req, res ) => {
    db.executeQuery( query.getAll , [], ( err, result ) => {
        if ( err ) {
            res.status(500).json("error al acceder a la base de datos");

        }

        res.json(result);
    });
}

exports.getMovies = ( req, res ) => {
    db.executeQuery( query.getById , [ req.params.id ], ( error, competencias ) => {
        if ( error ) {
            return res.status( 500 ).json( error );
        }

        if (! competencias.length ) {
            return res.status( 404 ).json( "no existe esa competencia.")
        }

        const competencia = competencias[0];
        db.executeQuery( query.getTwoMoviesById , [ competencia.id_pelicula_1, competencia.id_pelicula_2 ], ( error, peliculas ) => {
            if ( error ) {
                return res.status( 500 ).json( error );
            }

            const respuesta = {
                competencia: competencia.nombre,
                peliculas: peliculas
            }

            return res.json(respuesta);
        })

    })

}

exports.votar = ( req, res ) => {
    const { idPelicula } = req.body;
    const idCompetencia = req.params.id;

    db.executeQuery( query.setGanadora, [ idPelicula, idCompetencia ], ( error, row ) => {
        if ( error ) {
            return res.status( 500 ).json( error );
        }
        if ( row.affectedRows ) {
            res.json("se ha realizado la votación");
        } else {
            res.status(422).json("no se ha realizado ningún cambio");
        }
    });
}