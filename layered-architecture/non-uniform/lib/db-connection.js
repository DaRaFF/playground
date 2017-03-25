module.exports = require('knex')({
  client: 'sqlite3',
  connection: {
    filename:  __dirname + "/../db.sqlite"
  },
  database : 'test'
})
