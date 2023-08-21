import { useState } from "react";

const useInput = (vlaidateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIstouched] = useState(false);

  const valueIsValid = vlaidateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIstouched(true);
  };

  const reset = _ => {
    setEnteredValue('')
    setIstouched(false)
  }

  return {
    value: enteredValue,
    isValid : valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
