-- global

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

CREATE TABLE IF NOT EXISTS images (
	id SERIAL UNIQUE PRIMARY KEY,
	create_at TIMESTAMP DEFAULT NOW(),
	path TEXT UNIQUE NOT NULL,
	name TEXT NOT NULL
);

-- news

CREATE TABLE IF NOT EXISTS news_meta (
	id SERIAL UNIQUE NOT NULL PRIMARY KEY,
	title TEXT,
	description TEXT,
	url TEXT
);

CREATE TABLE IF NOT EXISTS news_goods (
	id SERIAL UNIQUE NOT NULL PRIMARY KEY,
	name TEXT NOT NULL,
	url TEXT NOT NULL,
	news_id INT
);

CREATE TABLE IF NOT EXISTS news (
	id SERIAL UNIQUE,
	title TEXT NOT NULL,
	content TEXT,
	image TEXT,
	date DATE,
	meta_id INT,
	goods INT,
	PRIMARY KEY (id),
	FOREIGN KEY (meta_id) REFERENCES news_meta(id)
);

-- category



-- main page
