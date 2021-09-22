const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5422, // Alterar a porta de 5422 para 5432 caso for utilizar o PostgreSQL diretamente em vez do Docker.
  user: 'root',
  password: 'root',
  database: 'api',
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
