import React, { createContext, useContext } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchExpenses } from "../services/expenseService";

const ExpensesContext = createContext(null);

export function ExpensesProvider({ children }) {
  const queryClient = useQueryClient();

  const {
    data: expenses = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  const value = {
    expenses,
    isLoading,
    isError,
    error,
    refetch,
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
