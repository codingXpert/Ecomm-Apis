const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let dbUrl;
    if (process.env.NODE_ENV === "development") {
      dbUrl = process.env.DEV_DB;
    } else if (process.env.NODE_ENV === "development") {
      dbUrl = process.env.PROD_DB;
    } else {
      throw new Error("Environment Not Set Properly");
    }
    const connection = await mongoose.connect(dbUrl);
    console.log(`Connected to mongoDB ${mongoose.connection.host}`);
  } catch (error) {
    console.error("Error while connecting to DB", error.message);
  }
};

module.exports = connectDB();
