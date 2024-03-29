import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return initialState;
  }

  return initialState;
};

const useInput = (validate) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const valueIsValid = validate(inputState.value)
  const hasError = !validate && inputState.isTouched

  const valueChangeHandler = (event) => {
    dispatch({type : 'INPUT', value : event.target.value})
  }

  const inputBlurHandler = () => {
    dispatch({type : 'BLUR'})
  }

  const reset = () => {
    dispatch({type : 'RESET'})
  } 

  return {
    value : inputState.value,
    isValid : valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }
};

export default useInput