CREATE TABLE que_veo_hoy.pelicula (
	id BIGINT UNSIGNED auto_increment NOT NULL,
	titulo varchar(100) NOT NULL,
	duracion INT(5) NOT NULL,
	director varchar(400) NOT NULL,
	anio INT(5) NOT NULL,
	fecha_lanzamiento DATE NOT NULL,
	puntuacion INT(2) NULL,
	poster varchar(300) NULL,
	trama varchar(700) NULL,
	genero_id BIGINT UNSIGNED,
	CONSTRAINT pelicula_PK PRIMARY KEY (id),
	CONSTRAINT pelicula_genero_FK FOREIGN KEY (genero_id) REFERENCES que_veo_hoy.genero(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
