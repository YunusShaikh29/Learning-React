import React from "react";

const AuthContext = React.createContext({
    isLoggedIn : false,
})

//AuthContext will be an object which wraps components
export default AuthContext