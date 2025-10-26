import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import"./utils/db.js";
const port = process.env.PORT || 3000;
import  categoryRoutes from './routes/category.route.js';
import expenseRoutes from './routes/expense.route.js';
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/categories', categoryRoutes);
app.use('/api/expenses', expenseRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});