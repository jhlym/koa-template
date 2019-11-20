require('dotenv').config();

import { Pool } from 'pg';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connectionString,
  ssl: false,
  max: 10,
});

export default pool;
