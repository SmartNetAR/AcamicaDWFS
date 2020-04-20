CREATE TABLE competencias.competencias (
	id INT UNSIGNED auto_increment NOT NULL,
	id_pelicula_1 INT UNSIGNED NULL,
	id_pelicula_2 INT UNSIGNED NULL,
	nombre varchar(150) NULL,
	id_pelicula_ganadora INT UNSIGNED NULL,
	CONSTRAINT competencias_PK PRIMARY KEY (id),
	CONSTRAINT competencias_FK FOREIGN KEY (id_pelicula_1) REFERENCES competencias.pelicula(id),
	CONSTRAINT competencias_FK_1 FOREIGN KEY (id_pelicula_2) REFERENCES competencias.pelicula(id),
	CONSTRAINT competencias_FK_2 FOREIGN KEY (id_pelicula_ganadora) REFERENCES competencias.pelicula(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
