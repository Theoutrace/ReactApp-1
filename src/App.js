import React from "react";
import ExpenseTotal from "./components/Expenses/ExpenseTotal";
import NewExpense from "./components/newExpense/NewExpense";
import "./App.css";

const App = () => {


  const addExpenseHandler = (expense) =>{
    // console.log('in app js');
    console.log(expense);
    
    
  }


  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <ExpenseTotal />
    </div>
  );


};

export default App;
