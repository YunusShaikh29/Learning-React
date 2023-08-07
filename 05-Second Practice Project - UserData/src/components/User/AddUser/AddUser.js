import styles from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";

import Wrapper from "../../Helper/Wrapper";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 &&
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title : 'Invalid input',
        message : 'Please enter valid name and age (non-empty value)'
      })
      return;
    }
    if (+enteredUserAge < 1 ) {
      setError({
        title : 'Invalid age',
        message : 'Please provide valid age ( > 0)'
      })
      return;
    }
    // console.log("Form is submitted");
    console.log(enteredUserName, enteredUserAge);
    // const userArray =
    //   {
    //     userName : enteredUserName,
    //     userAge : +enteredUserAge
    //   }

    props.onAddingUser(enteredUserName, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUserName("");
  };

  const errorHandler = () => {
    setError(null)
  }


  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />

          <label htmlFor="age">Age(years)</label>
          <input
            type="number"
            value={enteredUserAge}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
