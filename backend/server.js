const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  host: 'postgres',
  user: 'postgres',
  password: 'postgres',
  database: 'employees',
  port: 5432
});

app.get('/', (req, res) => {
  res.send('Backend API Running');
});

app.get('/employees', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM employee'
    );

    res.json(result.rows);

  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
