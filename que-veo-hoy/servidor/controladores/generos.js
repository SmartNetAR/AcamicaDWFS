const mysql = require('../lib/conexionbd.js');

exports.mostrarGeneros = (req, res) => {

    const sql = "SELECT * FROM genero";

    mysql.query(sql, ( err, results ) => {

        if ( err ) {
            res.status(500).json({
                ok: false,
                message : "Internal Error",
                error: err
            })
            throw err;
        }

        res.json({ generos: results });        
    });

}