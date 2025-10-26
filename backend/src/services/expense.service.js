const Expense = require('../models/expense');

export const createExpense = async(expenseData) =>
{
    const expense = (await Expense.create(expenseData)).save();
    return expense;
}

export const updateExpense = async (expenseId,expenseData) =>{
const updatedCategory = await Expense.findOneAndUpdate(
    { _id: expenseId },
    { $set: expenseData },
    { new: true }
  );
  return updatedCategory;
}

export const deleteExpense = async (expenseId) =>{
    const deletedExpense = await vendor.deleteMany({ _id: expenseId });
    return deletedExpense.deletedCount > 0;
}

export const getExpenseByCategory = async (categoryId) =>{
    const expenses = await Expense.find({categoryId});
    return expenses;
}

export const getExpense = async (expenseId) =>
{
    const expense = await Expense.findById(expenseId);
    return expense;
}
export const getAllExpenses = async () =>{
    return Expense.find({});
}


