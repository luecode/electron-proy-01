const { Pool } = require('pg');

const connection = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'qwerty21',
  database: 'db_electron'
})

function getConnection() {
  return connection
}

module.exports = { getConnection }