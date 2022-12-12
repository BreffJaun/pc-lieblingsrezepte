// I M P O R T   D E P E N D E N C I E S
import mongoose, {Schema, model} from "mongoose";

// S C H E M A  -  D A T A   S T R U C T U R E
const recipeSchema = new Schema({
  name: {type: String, required: true},
  img: {type: String, required: true},
  description: {type: String, required: true},
  ingredients: {type: [String], required: true},
  preparation: {type: String, required: true},
  creationDate: {
    type: Date,
    default: Date.now
  }
}, {strictQuery: true});


// M O D E L - T E M P L A T E   F O R   D B   E N T R I E S
const RecipeModel = model('Recipe', recipeSchema, 'recipes');
export default RecipeModel;

