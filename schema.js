const mongoose = require("mongoose")

const employeeShema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  lastCompany: String,
  lastSalary: Number,
  overallExp: Number,
  contactInfo: Number,
  yearGrad: Number,
  gradStream: String,
})

module.exports = {
  employeeShema,
}