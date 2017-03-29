const db = require('./lib/db')()
const Student = require('./Domain/Student')
const StudentMapper = require('./Domain/StudentMapper')
const StudentGateway = require('./DAL/StudentGateway')

studentGateway = new StudentGateway(db)
studentMapper = new StudentMapper(studentGateway)

student = new Student()
student.name = 'John Doe'
student.grade = 'A'

student2 = new Student()
student2.name = 'Mister X'
student2.grade = 'E'

studentMapper.add(student)
studentMapper.add(student2)

studentMapper.findAll()
.then(function(res) {
  console.log('the students ', res)
})
db.destroy()
