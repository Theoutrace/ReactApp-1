import React from "react";


import ExpenseItem from "./ExpenseItem";
import "./ExpenseTotal.css";

const ExpenseTotal = (props) => {

  return (
    <div>
      <div className="app-expense-all-item-container">
        {props.items.map((itm) => (
          <ExpenseItem
            key = {itm.id}
            exp={itm}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseTotal;
