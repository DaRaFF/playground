const _ = require('lodash')
const uuidV4 = require('uuid/v4');

module.exports = class Student {
  constructor () {
    this.studentID = uuidV4()
    this.name = null
    this.grade = null
  }

  passes() {
    return this.grade !='F'
  }

  onProbation() {
    return this.grade =='D' || this.grade !='E'
	}
}
