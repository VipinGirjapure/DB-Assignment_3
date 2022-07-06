const { default: mongoose } = require("mongoose")
const connectionWithMongoose = require("./connection")
const { employeeShema } = require("./schema")
// const employeesData = require("./employeesData.json")
const { insertOneWithMongoose, insertManyWithMongoose } = require("./create")

const employeeModel = mongoose.model("employees", employeeShema)


insertManyWithMongoose()

const findAllWithMongoose = async () => {
  try {
    await connectionWithMongoose()
    const result = await employeeModel.find()

    console.log("Successful record", result)
  } catch (e) {
    console.error("error record", e)
  }
}

const findWithSalaryMongoose = async () => {
  try {
    await connectionWithMongoose()
    const result = await employeeModel.find({ salary: { $gt: "30000" } })

    console.log("Successful record", result)
  } catch (e) {
    console.error("error record", e)
  }
}
const findWithExpMongoose = async () => {
  try {
    await connectionWithMongoose()
    const result = await employeeModel.find({ overallExp: { $gt: "1" } })

    console.log("Successful record", result)
  } catch (e) {
    console.error("error while fthe record", e)
  }
}
const findWithTwoConditonsMongoose = async () => {
  try {
    await connectionWithMongoose()
    const result = await employeeModel.find({
      $and: [{ yearGrad: { $gt: "2015" } }, { overallExp: { $gt: "1" } }],
    })

    console.log("Successful record", result)
  } catch (e) {
    console.error("error record", e)
  }
}
const updatingWithTwoConditonsMongoose = async () => {
  try {
    await connectionWithMongoose()
    const result = await employeeModel.updateMany(
      { salary: { $gt: "30000" } },
      { $set: { salary: "28000" } }
    )

    console.log("Successful record", result)
  } catch (e) {
    console.error("error record", e)
  }
}
const deletingWithMongoose = async () => {
  try {
    await connectionWithMongoose()
    const result = await employeeModel.deleteMany({
      lastCompany: "Y",
    })

    console.log("Successful record record", result)
  } catch (e) {
    console.error("error record", e)
  }
}

// findAllWithMongoose()
// findWithSalaryMongoose()
// findWithExpMongoose()
// findWithTwoConditonsMongoose()
// updatingWithTwoConditonsMongoose()
// deletingWithMongoose()