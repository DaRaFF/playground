const _ = require('lodash')

module.exports = class Customer {
  constructor ({name, code, dal} = {}) {
    this.name = name;
    this.code = code;
    this.dal = dal;
  }

  getCustomerProjection () {
    return {
      name: this.name,
      code: this.code
    }
  }

  add() {
    return this.dal.add(this.name, this.code)
  }

  getCustomers() {
    return this.dal.getCustomers()
  }
}
