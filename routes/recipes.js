// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import express from 'express';

// I M P O R T:  F I L E S  &  F U N C T I O N S
import { validateRequest } from '../middleware/validator.js'
import { recipesValidator } from '../middleware/recipesValidator.js';


// I M P O R T:  C O N T R O L L E R
import {
  recipesGetAll, 
  recipesGetOne,
  recipesPostOne,
  recipesPatchOne,
  recipesDeleteOne,
  recipesGetNew
} from '../controller/recipesController.js';

// ========================

// C R E A T E  R O U T E S
const router = express.Router();

router
  .route('/')
    .get(recipesGetAll)
    .post(recipesValidator, validateRequest, recipesPostOne);

router
  .route('/new')
    .get(recipesGetNew);

router
  .route('/:name')
    .get(recipesGetOne)
    .patch(recipesValidator, validateRequest, recipesPatchOne)
    .delete(recipesDeleteOne);

  export default router;