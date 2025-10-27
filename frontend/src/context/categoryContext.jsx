import React, { createContext, useContext } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllCategories } from "../services/categoryService";

// Create the context
const CategoriesContext = createContext();

// Provider component
export const CategoriesProvider = ({ children }) => {
  const queryClient = useQueryClient();

  // React Query handles fetching and caching
  const {
    data: categories = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  // Expose useful data and methods
  const value = {
    categories,
    isLoading,
    isError,
    error,
    refetch,
    invalidate: () => queryClient.invalidateQueries(["categories"]),
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

// Custom hook to use the context
export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
};
