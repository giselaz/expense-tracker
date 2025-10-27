import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "../services/categoryService";
import { Button } from "react-bootstrap";

const CreateCategoryForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createCategory, // <-- use the API function here
    onSuccess: (data) => {
      queryClient.invalidateQueries(["categories"]); // refresh categories list
      onClose(); // close modal
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Category Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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

export default CreateCategoryForm;
