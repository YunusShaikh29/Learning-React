import classes from './Root.module.css'
import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {

  // const navigation = useNavigation()

  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        {/* {navigation.state === 'loading' && <p>Loading</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout