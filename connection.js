const mongoose = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/Human_Resource_3";
const connectionWithMongoose = async () => {
  try {
    const connection = await mongoose.connect(connectionString);

    console.log("mongoose connected to Human_Resource_3");
    return connection;
  } catch (e) {
    console.log("error while connnecting mongoose");
  }
};

//   connectionWithMongoose();

module.exports = connectionWithMongoose;
