const db = require('./lib/db')()
const Customer = require('./Domain/Customer')
const CustomerDAL = require('./DAL/CustomerDAL')


custDAL = new CustomerDAL(db)
customer = new Customer({name: 'John Doe', code: 'jd', dal: custDAL})
customer2 = new Customer({name: 'Mister X', code: 'x', dal: custDAL})
customer.add()
customer2.add()

customer.getCustomers()
.then(function(res) {
  console.log('the customer ', res)
})
db.destroy()
