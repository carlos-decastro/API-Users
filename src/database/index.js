const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5422,
  user: 'root',
  password: 'root',
  database: 'api',
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
