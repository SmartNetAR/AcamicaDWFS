CREATE TABLE que_veo_hoy.genero (
	id BIGINT UNSIGNED auto_increment NOT NULL,
	nombre varchar(100) NOT NULL,
	CONSTRAINT genero_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
