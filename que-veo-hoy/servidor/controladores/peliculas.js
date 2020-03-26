const mysql = require('../lib/conexionbd.js');

exports.mostrarPeliculas = (req, res) => {

    const sql = "SELECT * FROM pelicula";
    const sqlTotalPeliculas = "SELECT COUNT(id) AS total FROM pelicula";
    const sqlParams = [];
    let where = " WHERE id > 0";

    const {genero, anio, titulo, columna_orden, tipo_orden = 'ASC', pagina, cantidad} = req.query;

    if ( genero ) {
        where = `${where} AND genero_id = ?`;
        sqlParams.push(genero);
    }

    if ( anio ) {
        where = `${where} AND anio = ?`;
        sqlParams.push(anio);
    }

    if ( titulo ) {
        where = `${where} AND titulo like ?`;
        sqlParams.push(`%${titulo}%`);
    }

    const order = columna_orden ? `ORDER BY ${columna_orden} ${tipo_orden}` : '';

    const limit = cantidad ? `LIMIT ${cantidad}` : '';

    let pagination = '';
    if ( pagina ) {
        if ( pagina > 1 ) {

            pagination = `OFFSET ${(pagina-1) * cantidad}`
        }
    }

    mysql.query(`${sql} ${where} ${order} ${limit} ${pagination}`, sqlParams, ( err, results ) => {

        if ( err ) {
            res.status(500).json({
                ok: false,
                message : "Internal Error",
                error: err
            })
            throw err;
        }
        
        mysql.query(`${sqlTotalPeliculas} ${where}`, sqlParams, ( err, count ) => {
            if ( err ) {
                res.status(500).json({
                    ok: false,
                    message : "Internal Error",
                    error: err
                })
                throw err;
            }

            const total = count[0].total;
            
            res.json({
                ok: true,
                total,
                pagina,
                cantidad,
                peliculas: results
            });        
        });
        

    });

}

exports.mostrarPeliculaPorId = (req, res) => {
    const sql = `SELECT pelicula.*, genero.nombre AS genero, actor.nombre AS actor FROM pelicula
        JOIN genero ON pelicula.genero_id = genero.id
        JOIN actor_pelicula ON pelicula.id = actor_pelicula.pelicula_id
        JOIN actor ON actor.id = actor_pelicula.actor_id
            WHERE pelicula.id = ?`
    
    const id = req.params.id ;

    mysql.query(`${sql}`, id, ( err, results ) => {

        if ( err ) {
            res.status(500).json({
                ok: false,
                message : "Internal Error",
                error: err
            })
            throw err;
        }
        
        const actores = results.map( pelicula => ({
            nombre: pelicula.actor
        }));

        const pelicula = results[0];
        pelicula.nombre = pelicula.genero;

        res.json({
            ok: true,
            pelicula,
            actores
        });
        

    });
}