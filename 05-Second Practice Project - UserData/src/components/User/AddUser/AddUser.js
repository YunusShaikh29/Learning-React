import styles from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import { useState } from "react";

const AddUser = () => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState(0);

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("Form is submitted");
    console.log(enteredUserName, enteredUserAge);
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  
  const ageChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  return (
    <Card cssClass={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input type="text" onChange={userNameChangeHandler} />

        <label htmlFor="age">Age(years)</label>
        <input type="number" onChange={ageChangeHandler} />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
