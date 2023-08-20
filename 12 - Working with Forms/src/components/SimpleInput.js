import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const onChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // console.log(event.target.value)
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true)

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false)
      return
    }


    console.log(enteredName);
    console.log(nameInputRef.current.value)
    setEnteredName("");
  };

  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = enteredNameIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={onChangeHandler}
          value={enteredName}
          ref={nameInputRef}
        />
        {enteredNameIsInvalid && <p className='error-text'> Name must not be empty </p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
