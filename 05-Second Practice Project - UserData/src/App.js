import React, { useState } from "react";
import AddUser from "./components/User/AddUser/AddUser";
// import Card from './components/UI/Card/Card';
import UserList from "./components/User/UserList/UserList";

function App() {

  const [userDataArr, setUserDataArr] = useState([])

  // const userDataArr = []
  const onUserSubmit = (uName, uAge) => {
    // userDataArr.push(userObj)
    setUserDataArr(prevState => {
      return [...prevState, {name : uName, age : uAge, id : Math.random().toString()}]
    })
  }
  // console.log(userDataArr)

  return (
    <React.Fragment>
      <AddUser onAddingUser={onUserSubmit}/>
      <UserList users={userDataArr}/>
    </React.Fragment>
  );
}

export default App;
