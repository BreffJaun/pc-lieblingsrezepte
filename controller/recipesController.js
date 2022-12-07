// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import { MongoClient, ObjectId } from 'mongodb';

// I M P O R T:  F I L E S  &  F U N C T I O N S
import RecipeModel from '../models/recipeModel.js'

//========================

// GET List of all recipes
export async function recipesGetAll (req, res, next) {
  try {
    res.json(await RecipeModel.find());
  } catch (err) {
    next(err);
  }
}


// GET the newest recipes
export async function recipesGetNew (req, res, next) {
  try {
    
    res.json(await RecipeModel.find().sort('-creationDate').limit(10));
  } catch (err) {
    next(err);
  }
}


// GET a specific recipe
export async function recipesGetOne(req, res, next) {
  try {
    if (!(await RecipeModel.find({name: {$regex: req.params.name}}))) {
      const err = new Error("No ORDER with this name in Database!");
      err.statusCode = 404;
      throw err;
    }
    res.status(200).json(await RecipeModel.find({name: {$regex: req.params.name}}).populate());
  } catch (err) {
    next(err);
  }
}

// POST (Add) a new recipe
export async function recipesPostOne (req, res, next) {
  try {
    res.status(200).json(await RecipeModel.create(req.body));
  } catch (err) {
    next(err);
  }
};

// PATCH (Update) specific recipe
export async function recipesPatchOne(req, res, next) {
  try {
    res.status(200).json(await RecipeModel.findOne({name: req.params.name}, req.body, {new:true}));
  } catch (err) {
    next(err);
  }
};

// Delete specific recipe
export async function recipesDeleteOne (req, res, next) {
  try{
    res.status(200).json(await RecipeModel.findOne({name: req.params.name}))
  } catch (err) {
    next(err);
  }
}


