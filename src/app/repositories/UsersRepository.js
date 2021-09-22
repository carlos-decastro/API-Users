const db = require('../../database/index');

class UsersRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT *
      FROM users
      ORDER BY users.first_name ${direction}
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM users WHERE users.id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return row;
  }

  async findByName(first_name, last_name) {
    const [row] = await db.query('SELECT * FROM users WHERE first_name = $1 AND last_name = $2', [first_name, last_name]);
    return row;
  }

  async create({
    first_name, last_name, email, phone, address,
  }) {
    const [row] = await db.query(`
      INSERT INTO users(first_name, last_name, email, phone, address)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `, [first_name, last_name, email, phone, address]);
    return row;
  }

  async update(id, {
    first_name, last_name, email, phone, address,
  }) {
    const [row] = await db.query(`
      UPDATE users
      SET first_name = $1, last_name = $2, email = $3, phone = $4, address = $5
      WHERE id = $6
      RETURNING *
    `, [first_name, last_name, email, phone, address, id]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM users WHERE id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new UsersRepository();
