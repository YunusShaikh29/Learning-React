import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // handling multiple states at once:
//   const [userInput, setUserInput] = useState({
//       enteredTitle : '',
//       enteredAmount : '',
//       enteredDate : ''
//   })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // 1st approach:
    // setUserInput({
    //     ...userInput,
    //     enteredTitle : event.target.value,
    // })

    // 2nd approach:
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle : event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount : event.target.value,
    // })
    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount : event.target.value}
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate : event.target.value,
    // })

    // setUserInput((prevState) => {
    //     return {...prevState, enteredDate : event.target.value}
    // })
  };


//  Shared Handler function / Alternate way 
//   const inputChangeHandler = (identifier, value) => {
//     if (identifier === "title") {
//       setEnteredTitle(value);
//     } else if (identifier === "amount") {
//       setEnteredAmount(value);
//     } else {
//       setEnteredDate(value);
//     }
//   };

  const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
    }
    console.log(expenseData)
    setEnteredAmount('')
    setEnteredTitle('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text" value={enteredTitle}  onChange={titleChangeHandler} 
            // onChange={(event) => {
            //   inputChangeHandler("title", event.target.value);
            // }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            // onChange={(event) => {
            //   inputChangeHandler("amount", event.target.value);
            // }}
          />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-12-30"
            value={enteredDate}
            onChange={dateChangeHandler}
            // onChange={(event) => {
            //   inputChangeHandler("date", event.target.value);
            // }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
