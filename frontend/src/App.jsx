import "./App.css";
import Category from "./components/Category";
import Expense from "./components/Expense";
function App() {
  return (
    <main>
      <h2>Expense Tracker</h2>
      <div className="expense-tracker-container">
        <Category />
        <Expense />
      </div>
    </main>
  );
}

export default App;
