function dbInit () {
  const db = require('./db-connection')

  return db.schema
  .dropTableIfExists('customers')
  .createTableIfNotExists('customers', function (table) {
    table.increments()
    table.string('name')
    table.string('code')
  })
  .catch(function(error) {
    console.error(error)
  })
  .then(function() {
    console.log('db schema has been set up.')
    db.destroy()
  })
}

module.exports = dbInit
