_ = require('lodash')
Student = require('./Student')

module.exports = class StudentMapper {

  constructor (studentGateway) {
    this.studentGateway = studentGateway
  }

  add(student) {
    return this.studentGateway.add(student)
  }

  findAll() {
    return this.studentGateway.findAll()
    .then(function(students){
      return _.map(students, function(s){
        const student = new Student()
        student.name = s.name
        student.grade = s.grade
        return student
      })
    })
  }
}
