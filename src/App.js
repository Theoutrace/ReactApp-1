import React from "react";
import ExpenseTotal from "./components/Expenses/ExpenseTotal";
import NewExpense from "./components/newExpense/NewExpense";
import "./App.css";

const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense />
      <ExpenseTotal />
    </div>
  );
};

export default App;
