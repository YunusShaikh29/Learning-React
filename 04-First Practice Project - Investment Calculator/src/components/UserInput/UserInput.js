import styles from "./UserInput.module.css";
const UserInput = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const resetHandler = () => {};

  const inputChangeHandler = (input, value) => {
    console.log(input, value)
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-saving", event.target.value)
            }
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution"  onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }/>
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return"  onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration"  onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }/>
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onSubmit={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
