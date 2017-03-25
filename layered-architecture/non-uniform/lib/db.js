let singleton

module.exports = function () {
  if (singleton) return singleton

  const db = require('./db-connection')

  db.schema.createTableIfNotExists('customers', function (table) {
    table.increments()
    table.string('name')
    table.string('code')
  })
  .catch(function(error) {
    console.error(error)
  })

  singleton = db
  return singleton
}
