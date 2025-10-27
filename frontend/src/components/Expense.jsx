import ExpenseCard from "../ui/ExpenseCard";
import { Form } from "react-bootstrap";
const categories = ["All Categories", "Food & Dining", "Utilities", "Transportation", "Entertainment"];
function Expense() {
  return (
    <div className="category-container align-items-center mt-4">
      <div className="category-header mb-4">
        <h2 style={{ textAlign: "center" }}>Expense</h2>
        <button className="btn btn-primary mt-2">Add Expense</button>
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
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="col-2 text-end">Amount</div>
        <div className="col-2 text-end">Actions</div>
      </div>
      <div className="category-list d-flex flex-wrap justify-content-center gap-3 mt-4">
        <ExpenseCard
          date="10/25/2025"
          description="Grocery shopping at Whole Foods"
          category="Food & Dining"
          amount={127.45}
        />
        <ExpenseCard
          date="10/25/2025"
          description="Grocery shopping at Whole Foods"
          category="Food & Dining"
          amount={127.45}
        />
      </div>
    </div>
  );
}

export default Expense;
