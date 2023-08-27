import classes from "./Auth.module.css";
import { authActions } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";
// import useInput from "../hooks/use-input";

const Auth = () => {
  const dispatch = useDispatch();
  // const login = useSelector(state => state.authentication.isAuthenticated)
  // const {
  //   value: enteredEmail,
  //   hasError: emailInputHasError,
  //   isValid: emailIsValid,
  //   valueChangeHandler: emailChangeHandler,
  //   inputBlurHandler: emailBlurHandler,
  //   reset: resetEmail,
  // } = useInput((value) => value.trim() !== "" && value.trim().includes("@"));

  // const {
  //   value: enteredPassword,
  //   hasError: passwordHasError,
  //   isValid: passwordIsValid,
  //   valueChangeHandler: passwordChangeHandler,
  //   inputBlurHandler: passwordBlurHandler,
  //   reset: resetPassword,
  // } = useInput((value) => value.trim().length > 5);

  // let formIsValid = false;
  // if (emailIsValid && passwordIsValid) {
  //   formIsValid = true;
  // }

  const onLoginHandler = (event) => {
    event.preventDefault();

    // if(!emailIsValid && !passwordIsValid){
    //   return;
    // }

    dispatch(authActions.login());

    // resetEmail();
    // resetPassword()
  };

  // const emailInputClasses = emailInputHasError
    // ? `${classes.control} ${classes.invalid}`
    // : `${classes.control}`;

  // const passwordInputClasses = passwordHasError
  //   ? `${classes.control} ${classes.invalid}`
  //   : `${classes.control}`;

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onLoginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              // onChange={emailChangeHandler}
              // onBlur={emailBlurHandler}
              // value={enteredEmail}
            />
            {/* {emailInputHasError && (
              <p className="error-text">Please provide correct email</p>
            )} */}
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              // onChange={passwordChangeHandler}
              // onBlur={passwordBlurHandler}
              // value={enteredPassword}
            />
            {/* {passwordHasError && (
              <p className="error-text">
                Password must contain more than 5 letters!
              </p>
            )} */}
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
