import React from "react";
import { Pencil, Trash } from "lucide-react"; // you can replace with Bootstrap icons if you prefer
import Card  from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/Button';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../services/categoryService";

export default function CustomCard({ title ,id}) {

   const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]); // Refresh category list
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  return (
    <Card className="shadow-sm border-0 rounded-3 mb-3">
      <div className="card-body d-flex justify-content-between align-items-center" style={{ border: '1px solid white', borderRadius: '8px', padding: '16px' }}>
        {/* Left side */}

          <h5 className="card-title fw-semibold mb-1">{title}</h5>
        {/* Right side */}
        <div className="text-end ms-3">
          {/* For category: icons at top-right */}

            <div className="buttons-container d-flex justify-content-end gap-2 mb-2">
              <Button variant='outline-dark' className="btn btn-outline-secondary btn-sm">
                <Pencil size={14} />
              </Button>
              <Button variant='outline-dark' className="btn btn-outline-secondary btn-sm" onClick={() => mutation.mutate(id)}>
                <Trash size={14} />
              </Button>
            </div>

        </div>
      </div>
    </Card>
  );
}
