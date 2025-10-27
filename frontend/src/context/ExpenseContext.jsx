import React, { createContext, useContext, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchExpenses } from "../services/expenseService";
const ExpensesContext = createContext(null);

export function ExpensesProvider({ children }) {
  const queryClient = useQueryClient();
    const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const {
    data: expenses = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["expenses", selectedCategoryId],
    queryFn: () => fetchExpenses(selectedCategoryId),
    keepPreviousData: true,
  });
  const value = {
    expenses,
    isLoading,
    isError,
    error,
    refetch,
    setSelectedCategoryId,
    selectedCategoryId,
    invalidate: () => queryClient.invalidateQueries(["expenses"]),
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export function useExpenses() {
  const context = useContext(ExpensesContext);
  if (!context) {
    throw new Error("useExpenses must be used within an ExpensesProvider");
  }
  return context;
}
