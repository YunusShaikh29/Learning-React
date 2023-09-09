import classes from './Root.module.css'
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {

  // const navigation = useNavigation()

  return (
    <>
      <MainNavigation />
      
        {/* {navigation.state === 'loading' && <p>Loading</p>} */}
        <Outlet />
      
    </>
  );
};

export default RootLayout