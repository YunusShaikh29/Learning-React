import styles from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import { useRef, useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";

import Wrapper from "../../Helper/Wrapper";

const AddUser = (props) => {

  const nameInputRef = useRef()
  const ageInputRef = useRef()

  
  // as we are using refs, we could simply remove our states:
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    // as we are using refs, we could simply remove our states
    
    if (
      enteredName.trim().length === 0 &&
      enteredAge.trim().length === 0
    ) {
      setError({
        title : 'Invalid input',
        message : 'Please enter valid name and age (non-empty value)'
      })
      return;
    }
    if (+enteredAge < 1 ) {
      setError({
        title : 'Invalid age',
        message : 'Please provide valid age ( > 0)'
      })
      return;
    }
    // console.log("Form is submitted");
    console.log(enteredAge, enteredName);
    // const userArray =
    //   {
      //     userName : enteredUserName,
      //     userAge : +enteredUserAge
      //   }
      
      props.onAddingUser(enteredName, enteredAge);
      nameInputRef.current.value = ''
      ageInputRef.current.value = ''
      
      // as we are using refs, we could simply remove our states
      // setEnteredUserAge("");
      // setEnteredUserName("");
    };
    
    const errorHandler = () => {
      setError(null)
    }
    
    
    // as we are using refs, we could simply remove our states
  // const userNameChangeHandler = (event) => {
  //   console.log(event.target.value)
  //   setEnteredUserName(event.target.value);
    
  // };
  
  // const ageChangeHandler = (event) => {
  //   // console.log(event.target.value)
  //   setEnteredUserAge(event.target.value);
  // };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            // value={enteredUserName}
            // onChange={userNameChangeHandler}
            ref={nameInputRef}
          />

          <label htmlFor="age">Age(years)</label>
          <input
            type="number"
            // value={enteredUserAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
