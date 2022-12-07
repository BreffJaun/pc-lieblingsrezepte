// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import * as dotenv from "dotenv"; dotenv.config();
import mongoose from "mongoose";
import {faker} from "@faker-js/faker";

// I M P O R T:  M O D E L
import RecipeModel from "../models/recipeModel.js";

// C O N N E C T   W I T H   M O N G O O S E  D B
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
.then(() => console.log('Connect with MongoDB: SUCCESS '))
.catch((err) => console.log('Connect with MongoDB: FAILED ', err))
mongoose.connection.on('error', console.log);

// S E E D I N G   P R O C E S S
seed()

// npm run seed
async function seed() {
  try {
    const fakeRecipeData = []
    for(let i = 0; i < 50; i++) {
      fakeRecipeData.push({
        name: faker.commerce.productName(),
        img: faker.image.food(),
        description: faker.lorem.text(),
        ingredients: faker.lorem.text(),
        preparation: faker.lorem.text() 
      })
    }
    const recipePromise = RecipeModel.insertMany(fakeRecipeData);
    const values = await Promise.all([
      recipePromise,
    ])
    console.log("Seeding complete", values);
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.disconnect()
  }
}

// node seeding/seed_db.js
// to clean the db & seed (fill) it with fake data