import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CategoriesProvider } from "./context/categoryContext";
import { ExpensesProvider } from "./context/ExpenseContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <CategoriesProvider>
          <ExpensesProvider>
            <App />
          </ExpensesProvider>
        </CategoriesProvider>
      </ToastProvider>
    </QueryClientProvider>
  </StrictMode>
);
