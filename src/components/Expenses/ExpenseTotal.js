import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Filter from "../Filter/Filter";
import "./ExpenseTotal.css";

const ExpenseTotal = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <div className="app-expense-all-item-container">
        <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.length === 0 && <p>No items to show</p> }
        {filteredExpenses.length >0 && filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} exp={expense} />
        ))}
        {filteredExpenses.length === 1 && <p>Only single Expense here. Please add more...</p>}

      </div>
    </div>
  );
};

export default ExpenseTotal;
