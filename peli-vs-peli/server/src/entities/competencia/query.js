const queries = {
    getAll: `SELECT * FROM competencias`,
    getById: `SELECT nombre, id_pelicula_1, id_pelicula_2
        FROM competencias
            WHERE id = ?`,
    getTwoMoviesById: `SELECT * FROM pelicula WHERE id IN (?, ?)`
};

module.exports = queries;