// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import * as dotenv from "dotenv"; dotenv.config();
import mongoose from "mongoose";

// I M P O R T:  M O D E L
import RecipeModel from "../models/recipeModel.js";

// C O N N E C T   W I T H   M O N G O O S E  D B
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
.then(() => console.log('Connect with MongoDB: SUCCESS '))
.catch((err) => console.log('Connect with MongoDB: FAILED ', err))
mongoose.connection.on('error', console.log);

cleanDB();

// npm run clean
async function cleanDB() {
  try {
    const recipePromise = RecipeModel.deleteMany({})// remove all entries
    const values = await Promise.all([
      recipePromise
    ])
    console.log("DB cleaned.", values)
    mongoose.disconnect();
  } catch (err) {
    console.log(err);
  }
};