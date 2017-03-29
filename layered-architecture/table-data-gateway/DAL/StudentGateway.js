module.exports = class StudenGateway {

  constructor (db) {
    this.db = db
  }

  add(student) {
    return this.db('students')
    .insert(student)
    .delay(1000)
    .then(function(res){
      console.log('StudentDAL: entity added')
      return res
    })
    .catch(function(error) {
      console.error(error)
    })
  }

  findAll() {
    return this.db.select().table('students')
    .then(function (res) {
      return res
    })
    .catch(function(error) {
      console.error(error)
    })
  }
}
