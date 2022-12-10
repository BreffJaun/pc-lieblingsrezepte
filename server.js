// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import * as dotenv from "dotenv"; dotenv.config();
import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// I M P O R T:  R O U T E S
import recipesRouter from './routes/recipes.js'; // i.e
// import wrongRoutes from './routes/wrongPath.js'


// I M P O R T:  E R R O R  H A N D L E R
import { errorHandler } from './middleware/errorhandler.js';

// C O N N E C T   W I T H   M O N G O O S E  D B
mongoose.set("strictQuery", false); // to prevent an erroneous error message
mongoose.set("strictQuery", false);
const DB_CONNECTION_STRING =  process.env.MONGO_DB_CONNECTION_STRING || "mongodb://localhost:27017"
const PORT = process.env.PORT || 4000
mongoose.connect(DB_CONNECTION_STRING)
.then(() => console.log('Connect with MongoDB: SUCCESS ✅'))
.catch((err) => console.log('Connect with MongoDB: FAILED ⛔', err))
// for errors which comes after the successfully connection
mongoose.connection.on('error', console.log);

// ========================

// C R E A T E  S E R V E R
const app = express();

// M I D D L E W A R E

// SERVER MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// ROUTER MIDDLEWARE
// INDEX
app.use('/recipes', recipesRouter);


// ERROR HANDLER
app.use(errorHandler);

// WRONG PATH HANDLER
// app.use('*', wrongRoutes);

// S E R V E R - S T A R T
app.listen(process.env.PORT, () => {
  console.log('Server runs on Port: ' + process.env.PORT);
});






