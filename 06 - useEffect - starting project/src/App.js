import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // // const storedLoggedInUserInfo = localStorage.getItem('isLoggedIn')

  // // if(storedLoggedInUserInfo === '1'){
  // //   setIsLoggedIn(true)
  // // }

  // useEffect(() => {
  //   const storedLoggedInUserInfo = localStorage.getItem("isLoggedIn");

  //   if (storedLoggedInUserInfo === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   // console.log('rendered')
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const AuthCtx = useContext(AuthContext)

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!AuthCtx.isLoggedIn && <Login />}
        {AuthCtx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
