import { validateCreateExpense,validateUpdateExpense } from "../validations/expense";
import * as ExpenseService from "../services/expense.service";
import transporter from "../utils/transporter";
import { handleValidation,handleServerError } from "../utils/responseHelper";

export const createExpense = async (req, res) => {

  const validation = handleValidation(validateCreateExpense, req.body);
  if (!validation.ok) {
    return res.status(validation.status).json({ ok: false, error: validation.message });
  }
  try{
    const expense = await ExpenseService.createExpense(req.body);
    sendNotification(expense.amount,expense.name);
    return res.status(200).json({ok:true, data:expense});
  }catch(err)
  {
    handleServerError(res, err);
  }
  // const { error } = validateCreateExpense(req.body);
  // if (error) {
  //   res.status(400).json({ ok: false, error: error.details[0].message });
  // } else {
  //   try {
  //     const expense = await ExpenseService.createExpense(req.body);
  //     const amount = req.body;
  //     sendNotification(amount,expense.name);
  //     res.status(200).json({ ok: true, data: expense });
  //   } catch (err) {
  //     res.status(500).json({ ok: false, error: "Internal Server Error" });
  //   }
  // }
};
export const updateExpense = async (req,res) =>
{
   const { error } = validateCreateExpense(req.body);

    if (error) {
      res.status(400).json({ ok: false, error: error.details[0].message });
    } else {
      try {
        const amount = req.body.amount;
        const expense = await ExpenseService.createExpense(req.body);
        sendNotification(expense.amount, expense.name);
        res.status(200).json({ ok: true, data: expense });
      } catch (err) {
        res.status(500).json({ ok: false, error: "Internal Server Error" });
      }
    }
}
const sendNotification = (amount, expenseName) => {
  if (amount > 1000) {
    const mailOptions = {
      from: process.env.GOOGLE_EMAIL,
      to: process.env.COMPANY_EMAIL,
      subject: "Expense Amount Check",
      text: `The amount for ${expenseName} is too high`,
    };
    transporter.sendMail(mailOptions, (error, info) => {});
  }
};
