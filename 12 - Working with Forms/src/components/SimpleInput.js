// import {  } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: nameInputIsValid,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emmailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: emailInputIsValid,
    reset: resetEmailInput,
  } = useInput(
    (value) =>
      value.trim().includes("@") &&
      value.trim().length > 4 &&
      value.trim().includes(".")
  );

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredEmail, setEnteredEmail] = useState("");

  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false)

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // const enteredEmailIsValid =
  //   enteredEmail.trim().includes("@") &&
  //   enteredEmail.trim().length > 0 &&
  //   enteredEmail.trim().includes(".");
  // const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  // const onNameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const onEmailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const onNameInputBlurHandler = () => {
  //   setEnteredNameTouched(true);
  // };

  // const onEmailInputBlurHandler = () => {
  //   setEnteredEmailTouched(true);
  // };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);
    // setEnteredEmailTouched(true);

    if (!nameInputIsValid && !emailInputIsValid) {
      // setEnteredNameIsValid(false)
      return;
    }

    console.log(enteredName);
    // console.log(nameInputRef.current.value)
    // setEnteredName("");
    // setEnteredEmail("");
    resetNameInput();
    resetEmailInput()

    // setEnteredNameTouched(false);
    // setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emmailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text"> Name must not be empty </p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="Email">Your E-mail</label>
        <input
          type="email"
          id="Email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emmailInputHasError && (
          <p className="error-text"> Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
