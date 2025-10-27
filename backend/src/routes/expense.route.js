import express from "express";
var route = express.Router();
import * as ExpenseController from "../controllers/expense.controller.js";

// get all expenses
route.get("/", ExpenseController.getAllExpenses);
route.get('/:categoryId', ExpenseController.getExpensesByCategory);
// add expense
route.post("/:categoryId", ExpenseController.createExpense);
// update expense
route.patch("/:expenseId", ExpenseController.updateExpense);
// delete expense
route.delete("/:expenseId", ExpenseController.deleteExpense);

export default route;
