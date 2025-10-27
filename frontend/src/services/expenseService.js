import axiosInstance from "../util/axiosInstance";

export const fetchExpenses = async () => { 
  const response = await axiosInstance.get("/expenses");;

  const result = await response.data;
  if (!result.ok) throw new Error("Backend returned an error");

  return result.data; 
};

export const createExpense = async (expenseData) => {
  const response = await axiosInstance.post(`/expenses/${expenseData.categoryId}`, expenseData);

  const result = await response.data;
  if (!result.ok) throw new Error("Backend returned an error");

  return result.data;
};
 

export const deleteExpense = async (id) => {
  const response = await axiosInstance.delete(`/expenses/${id}`);
  if (!response.ok) throw new Error("Failed to delete expense");

  const result = await response.data;
  if (!result.ok) throw new Error(result.message || "Failed to delete expense");
  return result.data;
};