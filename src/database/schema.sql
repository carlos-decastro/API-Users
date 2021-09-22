CREATE DATABASE api;

-- Complemento de informações para instalação informada no GitHub.
-- execute o comando \c api para conectar no banco de dados,
-- após isso basta seguir os comandos abaixo para criação do banco de dados.

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  address VARCHAR NOT NULL
);
