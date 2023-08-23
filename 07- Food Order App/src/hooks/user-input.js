import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
    return initialState
}

const userInput = (validate) => {
  const [userValue, dispatch] = useReducer(inputStateReducer, initialState);

    

};

export default userInput;
