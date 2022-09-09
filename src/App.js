import ExpenseItem from "./components/Expenses/ExpenseItem";
import { Expenses } from "./components/Expenses/ExpensesData";
import './App.css'

const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      {Expenses.map((item) => {
        return (
          <div className="app-expense-all-item-container">
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              LocationOfExpenditure={item.LocationOfExpenditure}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
