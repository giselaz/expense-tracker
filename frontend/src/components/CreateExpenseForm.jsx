import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createExpense } from "../services/expenseService";
import { Button } from "react-bootstrap";
import  {useCategories} from "../context/categoryContext";

const CreateExpenseForm = ({ onClose }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [categoryId, setCategoryId] = useState(0);

  const { categories } = useCategories();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createExpense,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["expenses"]); 
      onClose(); // close modal
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ description, amount: parseFloat(amount), categoryId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Expense Description</label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          className="form-select"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex justify-content-end gap-2">
        <Button variant="secondary" type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" disabled={mutation.isLoading}>
             {mutation.isLoading ? "Saving..." : "Save"}
        </Button>
      </div>
    </form>
  );
};

export default CreateExpenseForm;
