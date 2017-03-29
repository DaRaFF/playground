function dbReset (tableName) {
  const db = require('./db-connection')

  return db.schema
  .dropTableIfExists(tableName)
  .catch(function(error) {
    console.error(error)
  })
  .then(function() {
    console.log('db schema has been set up.')
    db.destroy()
  })
}

module.exports = function(tableName) {
  dbReset(tableName)
}
