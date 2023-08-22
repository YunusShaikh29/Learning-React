import { useState } from "react";
import useInput1 from "../hooks/use-input1";

const BasicForm = (props) => {
  // const [enteredFirstName, setEnteredFirstName] = useState("");
  // const [enteredFirstNameIsTouchd, setEnteredFirstNameIsTouched] = useState(false);

  // const [enteredLastName, setEnteredLastName] = useState("");
  // const [enteredLastNameIsTouched, setEnteredLastNameIsTouched] =
  //   useState(false);

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  // const firstNameIsValid = enteredFirstName.trim() !== ''
  // const firstNameIsInvalid = !firstNameIsValid && enteredFirstNameIsTouchd

  // const lastNameIsValid = enteredLastName.trim() !== ''
  // const lastNameIsInvalid = !lastNameIsValid && enteredLastNameIsTouched

  // const emailIsValid = enteredEmail.trim().includes('@')
  // const emailIsInvalid = !emailIsValid && enteredEmailIsTouched

  const isNotEmpty = value => value.trim() !== ''

  const {
    value: enteredFirstName,
    hasError: firstNameHasError,
    isValid : firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput1(isNotEmpty);

  const {
    value : enteredLastName,
    hasError : lastNameHasError,
    isValid : lastNameIsValid,
    valueChangeHandler : lastNameChangeHandler,
    inputBlurHandler : lastNameBlurHandler,
    reset : resetLastName,
  } = useInput1(isNotEmpty);

  const { 
    value : enteredEmail,
    hasError : emailHasError,
    isValid : emailIsValid,
    valueChangeHandler : emailChangeHandler,
    inputBlurHandler : emailBlurHandler,
    reset : resetEmail
  } = useInput1(value => value.trim().includes('@'))


  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  // const onFirstNameInputChange = (event) => {
  //   setEnteredFirstName(event.target.value);
  // };
  // const onFirstNameInputBlur = () => {
  //   setEnteredFirstNameIsTouched(true);
  // };

  // const onLastNameInputChange = (event) => {
  //   setEnteredLastName(event.target.value);
  // };
  // const onLastNameInputBlur = () => {
  //   setEnteredLastNameIsTouched(true);
  // };

  // const onEmailInputChange = (event) => {
  //   setEnteredEmail(event.target.value);
  // };
  // const onEmailInputBlur = () => {
  //   setEnteredEmailIsTouched(true);
  // };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // setEnteredFirstNameIsTouched(true);
    // setEnteredLastNameIsTouched(true);
    // setEnteredEmailIsTouched(true);

    if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) {
      return;
    }

    console.log(enteredFirstName, enteredLastName, enteredEmail);

    // setEnteredFirstName("");
    // setEnteredLastName("");
    // setEnteredEmail("");

    // setEnteredFirstNameIsTouched(false);
    // setEnteredLastNameIsTouched(false);
    // setEnteredEmailIsTouched(false);

    resetFirstName()
    resetLastName()
    resetEmail()
  };

  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First Name must not be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
