import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const Home = (props) => {

  const AuthCxt = useContext(AuthContext)

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={AuthCxt.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
