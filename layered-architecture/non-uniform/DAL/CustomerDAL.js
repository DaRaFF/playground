module.exports = class CustomerDAL {

  constructor (db) {
    this.db = db
  }

  add(name, code) {
    return this.db('customers')
    .insert({name: name, code: code})
    .delay(1000)
    .then(function(res){
      console.log('CustomerDAL: entity added')
      return res
    })
    .catch(function(error) {
      console.error(error)
    })
  }

  getCustomers() {
    return this.db.select().table('customers')
    .then(function (res) {
      return res
    })
    .catch(function(error) {
      console.error(error)
    })
  }
}
