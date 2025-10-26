const mongoose = require("mongoose");

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

 module.exports = Expense;