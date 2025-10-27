import { validateCreateExpense } from "../validations/expense.js";
import * as ExpenseService from "../services/expense.service.js";
import transporter from "../utils/transporter.js";
import { handleValidation } from "../utils/responseHelper.js";

export const createExpense = async (req, res) => {
  const expenseData = { ...req.body, categoryId: req.params.categoryId };
  const validation = handleValidation(validateCreateExpense, expenseData);
  if (!validation.ok) {
    return res
      .status(validation.status)
      .json({ ok: false, error: validation.message });
  }
  try {
    const expense = await ExpenseService.createExpense(expenseData);
    sendNotification(expense.amount, expense.name);
    return res.status(200).json({ ok: true, data: expense });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Internal Server Error" });
  }
};
export const updateExpense = async (req, res) => {
  const { error } = validateCreateExpense(req.body);

  if (error) {
    res.status(400).json({ ok: false, error: error.details[0].message });
  } else {
    try {
      const expense = await ExpenseService.createExpense(req.body);
      sendNotification(expense.amount, expense.description);
      res.status(200).json({ ok: true, data: expense });
    } catch (err) {
      res.status(500).json({ ok: false, error: "Internal Server Error" });
    }
  }
};

export const getAllExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseService.getAllExpenses();
    res.status(200).json({ ok: true, data: expenses });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Internal Server Error" });
  }
};
export const getExpensesByCategory = async (req, res) => {
  try {
    const expenses = await ExpenseService.getExpenseByCategory(
      req.params.categoryId
    );
    res.status(200).json({ ok: true, data: expenses });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Internal Server Error" });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const expenseId = req.params.expenseId;
    const deleted = await ExpenseService.deleteExpense(expenseId);
    if (deleted) {
      res
        .status(200)
        .json({ ok: true, message: "Expense deleted successfully" });
    } else {
      res.status(404).json({ ok: false, error: "Expense not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ ok: false, error: "Internal Server Error" });
  }
};

const sendNotification = (amount, description) => {
  if (amount > 1000) {
    const mailOptions = {
      from: process.env.GOOGLE_EMAIL,
      to: process.env.COMPANY_EMAIL,
      subject: "Expense Amount Check",
      text: `The amount for ${description} is too high`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  }
};
