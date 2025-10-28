import Expense from '../models/expense.js';

export const createExpense = async(expenseData) =>
{
    const expense = (await Expense.create(expenseData)).save();
    return expense;
}


export const deleteExpense = async (expenseId) =>{
    const deletedExpense = await Expense.deleteMany({ _id: expenseId });
    return deletedExpense.deletedCount > 0;
}

export const getExpenseByCategory = async (categoryId) =>{
    const expenses = await Expense.find({categoryId});
    return expenses;
}

export const getAllExpenses = async () =>{
    return Expense.find({});
}


