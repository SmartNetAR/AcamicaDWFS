CREATE TABLE que_veo_hoy.actor_pelicula (
	id BIGINT UNSIGNED auto_increment NOT NULL,
	actor_id BIGINT UNSIGNED NOT NULL,
	pelicula_id BIGINT UNSIGNED NOT NULL,
	CONSTRAINT actor_pelicula_PK PRIMARY KEY (id),
	CONSTRAINT actor_pelicula_FK FOREIGN KEY (actor_id) REFERENCES que_veo_hoy.actor(id) ON DELETE CASCADE,
	CONSTRAINT actor_pelicula_FK_1 FOREIGN KEY (pelicula_id) REFERENCES que_veo_hoy.pelicula(id) ON DELETE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
