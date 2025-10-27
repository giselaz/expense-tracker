import React from "react";
import { Button } from "react-bootstrap";
import { useMutation ,useQueryClient} from "@tanstack/react-query";
import { deleteExpense } from "../services/expenseService";
export default function ExpenseCard({ date, description, category, amount ,id}) {
     const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]); // Refresh expense list
    },
    onError: (error) => {
      alert(error.message);
    },
  });
  return (
    <div className="card border-0 border-bottom py-3 px-2">
      <div className="card-body d-flex align-items-center justify-content-between p-0">
        {/* Date */}
        <div className="col-2 text-muted">{date}</div>

        {/* Description */}
        <div className="col-4 fw-semibold">{description}</div>

        {/* Category */}
        <div className="col-2 text-muted">{category}</div>

        {/* Amount */}
        <div className="col-2 fw-bold text-end">${amount.toFixed(2)}</div>

        {/* Actions */}
        <div className="col-2 text-end">
          <Button
            variant="link"
            size="sm"
            className="p-0 me-2 text-decoration-none"
          >
            Edit
          </Button>
          <Button
            variant="link"
            size="sm"
            className="p-0 text-decoration-none text-danger"
            onClick={() => mutation.mutate(id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
