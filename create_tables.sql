-- criar extensão do UUID-
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- criar tabela de categorias-
CREATE TABLE IF NOT EXISTS categories(
	id 		BIGSERIAL 		PRIMARY KEY,
  	name	VARCHAR(200)	NOT NULL	UNIQUE

);

-- criar tabela de produtos-
CREATE TABLE IF NOT EXISTS products(
	id 			UUID			PRIMARY KEY	DEFAULT uuid_generate_v4(),
  	name		VARCHAR(200)	NOT NULL,
  	price		DECIMAL(8,2)	NOT NULL,
  	category_id	INTEGER,
  	FOREIGN KEY	(category_iD)	REFERENCES	categories(id)

);