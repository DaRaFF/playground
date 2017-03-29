let singleton

module.exports = function () {
  if (singleton) return singleton

  const db = require('./db-connection')

  db.schema.createTableIfNotExists('students', function (table) {
    table.increments()
    table.string('studentID')
    table.string('name')
    table.string('grade')
  })
  .catch(function(error) {
    console.error(error)
  })

  singleton = db
  return singleton
}
