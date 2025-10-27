import axiosInstance from "../util/axiosInstance";
export const fetchExpenses = async (categoryId="" ) => { 
  const url = categoryId ? `/expenses/${categoryId}` : "/expenses";
  const response = await axiosInstance.get(url);

  const result = await response.data;
  if (!result.ok) throw new Error("Failed to retrieve expenses");

  return result.data; 
};
export const fetchExpensesByCategory = async (categoryId) =>{
  const response = await axiosInstance.get(`/expenses/${categoryId}`);
  const result = await response.data;
  if(!result.ok)
  {
    throw new Error('Error filtering expenses');
  }
  return result.data;
} 
export const createExpense = async (expenseData) => {
  const response = await axiosInstance.post(`/expenses/${expenseData.categoryId}`, expenseData);

  const result = await response.data;
  if (!result.ok) throw new Error("Backend returned an error");

  return result.data;
};
 

export const deleteExpense = async (id) => {
  const response = await axiosInstance.delete(`/expenses/${id}`);
  const result = await response.data;
  if (!result.ok) throw new Error(result.message || "Failed to delete expense");
  return result.data;
};