import styles from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("Form is submitted");
  };
  return (
    <Card cssClass={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input type="text" />

        <label htmlFor="age">Age(years)</label>
        <input type="number" />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
