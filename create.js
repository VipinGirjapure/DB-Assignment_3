const { default: mongoose } = require("mongoose")
const connetionWithMongoose = require("./connection")
const { employeeShema } = require("./schema")
// const employeesData = require("./employeesData.json")

const employeeModel = mongoose.model("employees", employeeShema)

const insertOneWithMongoose = async () => {
  try {
    await connetionWithMongoose()
    const employee1 = new employeeModel({
      firstName: "John",
      lastName: "Doe",
      salary: 25000,
      department: "HR",
      lastCompany: "X",
      lastSalary: 10000,
      overallExp: 2,
      contactInfo: 1234567890,
      yearGrad: 2016,
      gradStream: "CSE",
    })
    const result = await emp1.save()
    console.log("Successfully created the record", result)
  } catch (e) {
    console.error("Error while inserting", e)
  }
}

const insertManyWithMongoose = async () => {
  try {
    await connetionWithMongoose()
    const employee1 = new employeeModel({
      firstName: "John",
      lastName: "Doe",
      salary: 25000,
      department: "HR",
      lastCompany: "X",
      lastSalary: 10000,
      overallExp: 2,
      contactInfo: 1234567890,
      yearGrad: 2016,
      gradStream: "CSE",
    })

    const employee2 = new employeeModel({
      firstName: "Rohan",
      lastName: "Jame",
      salary: 30000,
      department: "Technical",
      lastCompany: "Y",
      lastSalary: 15000,
      overallExp: 1,
      contactInfo: 1234567860,
      yearGrad: 2015,
      gradStream: "CSE",
    })

    const employee3 = new employeeModel({
      firstName: "Jame",
      lastName: "Doe",
      salary: 35000,
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: 20000,
      overallExp: 1,
      contactInfo: 123567890,
      yearGrad: 2019,
      gradStream: "ECE",
    })

    const employee4 = new employeeModel({
      firstName: "Sao",
      lastName: "Avika",
      salary: 30000,
      department: "Sales",
      lastCompany: "Y",
      lastSalary: 15000,
      overallExp: 2,
      contactInfo: 1234567860,
      yearGrad: 2015,
      gradStream: "CSE",
    })

    const employee5 = new employeeModel({
      firstName: "Jame",
      lastName: "roh",
      salary: 35000,
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: 15000,
      overallExp: 2,
      contactInfo: 123567890,
      yearGrad: 2019,
      gradStream: "EEE",
    })

    const employee6 = new employeeModel({
      firstName: "Rohan",
      lastName: "Jame",
      salary: 30000,
      department: "Technical",
      lastCompany: "Y",
      lastSalary: 15000,
      overallExp: 1,
      contactInfo: 1234567860,
      yearGrad: 2015,
      gradStream: "CSE",
    })

    const employee7 = new employeeModel({
      firstName: "Jame",
      lastName: "Doe",
      salary: 35000,
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: 20000,
      overallExp: 1,
      contactInfo: 123567890,
      yearGrad: 2019,
      gradStream: "ECE",
    })

    const employee8 = new employeeModel({
      firstName: "Sao",
      lastName: "Avika",
      salary: 30000,
      department: "Sales",
      lastCompany: "Y",
      lastSalary: 15000,
      overallExp: 2,
      contactInfo: 1234567860,
      yearGrad: 2015,
      gradStream: "CSE",
    })

    const employee9 = new employeeModel({
      firstName: "Jame",
      lastName: "Doe",
      salary: 35000,
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: 15000,
      overallExp: 2,
      contactInfo: 123567890,
      yearGrad: 2019,
      gradStream: "EEE",
    })

    const employee10 = new employeeModel({
      firstName: "Rohan",
      lastName: "Jame",
      salary: 30000,
      department: "Technical",
      lastCompany: "Y",
      lastSalary: 15000,
      overallExp: 1,
      contactInfo: 1234567860,
      yearGrad: 2015,
      gradStream: "CSE",
    })

    const employee11 = new employeeModel({
      firstName: "Jame",
      lastName: "Doe",
      salary: 35000,
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: 20000,
      overallExp: 1,
      contactInfo: 123567890,
      yearGrad: 2019,
      gradStream: "ECE",
    })

    const employee12 = new employeeModel({
      firstName: "Sao",
      lastName: "Avika",
      salary: 30000,
      department: "Sales",
      lastCompany: "Y",
      lastSalary: 15000,
      overallExp: 2,
      contactInfo: 1234567860,
      yearGrad: 2015,
      gradStream: "CSE",
    })

    const employee13 = new employeeModel({
      firstName: "Jame",
      lastName: "Doe",
      salary: 35000,
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: 15000,
      overallExp: 2,
      contactInfo: 123567890,
      yearGrad: 2019,
      gradStream: "EEE",
    })

    const employeeArr = [
      employee1,
      employee2,
      employee3,
      employee4,
      employee5,
      employee6,
      employee7,
      employee8,
      employee9,
      employee10,
      employee11,
      employee12,
      employee13,
    ]

    const result = await employeeModel.insertMany(employeeArr)

    console.log("Successfully created multiple record", result)
  } catch (e) {
    console.error("error while inserting multiple record", e)
  }
}

module.exports = {
  insertOneWithMongoose,
  insertManyWithMongoose,
}