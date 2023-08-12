const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectToMongo = async (MONGODB_URL) => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/UserLogin");
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error + " error");
  }
};
module.exports = connectToMongo;
