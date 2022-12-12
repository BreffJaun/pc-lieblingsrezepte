// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import {body} from 'express-validator';

// C R E A T E   V A L I D A T O R
export const recipesValidator = [
  body("name")
    .notEmpty()
    .withMessage("Recipe name has to bet set!")
    .isAlpha("de-DE", {ignore: " -"})
    .withMessage("Recipe name contains not allowed signs!")
    .trim() //nimmt Leerzeichen raus
    .escape(), // wandelt Sonderzeichen um
  body("img")
    .trim(),
    // .isURL(),
  body("description")
    .notEmpty()
    .withMessage("Description has to be set!")
    .trim(),
  body("ingredients")
    .notEmpty()
    .withMessage("Ingredients has to bet set!")
    .trim(),
  body("preparation")
    .notEmpty()
    .withMessage("Preparation has to bet set!")
    .trim()
]

// normalize() macht alles lowerCase

