import ExpenseItem from "./components/ExpenseItem";
import { Expenses } from "./components/ExpensesData";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      {Expenses.map((item) => {
        console.log(item);
        return (
          <div>
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
