import React from "react";

import {Expenses} from './ExpensesData';
import ExpenseItem from './ExpenseItem';
import "./ExpenseTotal.css";


const ExpenseTotal = () => {
  return (
    <div>
      {Expenses.map((item) => {
        return (
          <>
            <div className="app-expense-all-item-container">
              <ExpenseItem
                title={item.title}
                amount={item.amount}
                date={item.date}
                LocationOfExpenditure={item.LocationOfExpenditure}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ExpenseTotal;
