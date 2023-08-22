import { useReducer } from "react";

const initialState = { value: "", isTouched: false };

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }

  return initialState;
};

const useInput1 = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  // const [enteredValue, setEnteredValue] = useState('')
  // const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    // setEnteredValue(event.target.value)
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
    // setIsTouched(true)
  };

  const reset = () => {
    dispatch({ type: "RESET" });
    // setEnteredValue('')
    // setIsTouched(false)
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    inputBlurHandler,
    valueChangeHandler,
    reset,
  };
};

export default useInput1;
