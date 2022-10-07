CREATE TABLE IF NOT EXISTS roles (
	id SERIAL UNIQUE PRIMARY KEY,
	name VARCHAR(65) UNIQUE
);

INSERT INTO roles (name) VALUES ('super');
INSERT INTO roles (name) VALUES ('admin');
INSERT INTO roles (name) VALUES ('content');

CREATE TABLE IF NOT EXISTS users (
	id SMALLSERIAL UNIQUE,
	login VARCHAR(99) UNIQUE NOT NULL,
	password TEXT NOT NULL,
	role INT,
	PRIMARY KEY (id),
	FOREIGN KEY (role) REFERENCES roles(id)
);

CREATE TABLE IF NOT EXISTS faq (
	id SMALLSERIAL UNIQUE PRIMARY KEY,
	question TEXT NOT NULL,
	answer TEXT NOT NULL
);