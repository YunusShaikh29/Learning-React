import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isNewExpenseVisible, setIsNewExpenseVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const showNewExpenseHandler = () => {
    setIsNewExpenseVisible(true);
  };

  const hideNewExpenseHandler = () => {
    setIsNewExpenseVisible(false);
  };

  return (
    <div className="new-expense">
      {!isNewExpenseVisible && (
        <button onClick={showNewExpenseHandler}>Add New Expense</button>
      )}

      {isNewExpenseVisible && (
        <ExpenseForm
          onHidingNewExpenseForm={hideNewExpenseHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
