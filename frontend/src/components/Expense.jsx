import ExpenseCard from "../ui/ExpenseCard";
import { Form, Modal } from "react-bootstrap";
import { useCategories } from "../context/categoryContext";
import { useState } from "react";
import CreateExpenseForm from "./CreateExpenseForm";
import { useExpenses } from "../context/ExpenseContext";

function Expense() {
  const { categories } = useCategories();

  const [filterCategory, setFilterCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { expenses, isLoading, isError, error } = useExpenses();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div className="category-container align-items-center mt-4">
      <div className="category-header mb-4">
        <h2 style={{ textAlign: "center" }}>Expense</h2>
        <button
          className="btn btn-primary mt-2"
          onClick={() => setShowModal(true)}
        >
          Add Expense
        </button>
      </div>
      <div className=" w-100 d-flex fw-semibold mb-2 px-2 align-items-center">
        <div className="col-2">Date</div>
        <div className="col-4">Description</div>
        <div className="col-2 d-flex align-items-center gap-2">
          <span>Category</span>
          <Form.Select
            size="sm"
            // value={filterCategory}
            // onChange={(e) => setFilterCategory(e.target.value)}
            style={{ width: "150px" }}
          >
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="col-2 text-end">Amount</div>
        <div className="col-2 text-end">Actions</div>
      </div>
      <div className="category-list d-flex flex-wrap justify-content-center gap-3 mt-4">
        {expenses.map((expense) => (
          <ExpenseCard
            key={expense._id}
            date={new Date(expense.createdAt).toLocaleDateString()}
            description={expense.description}
            category={
                categories.find((cat) => cat._id === expense.categoryId)?.name ||
                "Uncategorized"
            }
            amount={expense.amount}
          />
        ))}
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="Create Expense"
      >
        <CreateExpenseForm onClose={() => setShowModal(false)} />
      </Modal>
    </div>
  );
}

export default Expense;
