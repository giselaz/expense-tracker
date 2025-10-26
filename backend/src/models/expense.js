import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category",required:true },
  amount: { type: Number, required: true },
  description: {type: String, required:true},
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});


 const Expense = mongoose.model('expense',expenseSchema);

export default Expense;