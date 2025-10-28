
import Category from "./components/Category";
import Expense from "./components/Expense";

function App() {
  return (
    <div className="container mt-4">
      <h2>Expense Tracker</h2>
      <div className="expense-tracker-container">
        <Category />
        <Expense />
      </div>
    </div>
  );
}

export default App;
