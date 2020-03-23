const mysql = require('../lib/conexionbd.js');

exports.mostrarPeliculas = (req, res) => {

    const sql = "SELECT * FROM pelicula";
    let where = " WHERE id > 0";

    const {genero, anio, titulo, columna_orden, tipo_orden, pagina, cantidad} = req.query;

    if ( genero ) {
        where = `${where} AND genero_id = ${genero}`
    }

    if ( anio ) {
        where = `${where} AND anio = ${anio}`
    }

    if ( titulo ) {
        where = `${where} AND titulo like '%${titulo}%'`
    }

    mysql.query(`${sql} ${where}`, ( err, results ) => {

        if ( err ) {
            res.status(500).json({
                ok: false,
                message : "Internal Error",
                error: err
            })
            throw err;
        }

        res.json({ peliculas: results });        
    });

}