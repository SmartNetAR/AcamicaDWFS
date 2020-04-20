const mysql = require("mysql2");
const config = require("../config/config.js")

const pool = mysql.createPool( config.mysql );

exports.getConnection = ( cb ) => {
    pool.getConnection( (err, conn) => {
        return cb( err, conn )
    })
}

exports.executeQuery = ( query, params, cb ) => {
    pool.getConnection(( err, conn ) => {
        if ( err ) {
            console.log(err)
            return cb( err );
        }

        conn.execute( query, params, ( err, result, fields ) => {
            conn.release();

            return cb( err, result, fields );
        })

    });
}

exports.closeConnection = ( conn ) => {
    return conn.release();
}