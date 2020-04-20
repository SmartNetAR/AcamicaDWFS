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