CREATE TABLE que_veo_hoy.actor (
	id BIGINT UNSIGNED auto_increment NOT NULL,
	nombre varchar(200) NOT NULL,
	CONSTRAINT actor_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
