import classes from './Header.module.css';
import { authActions } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {

  const dispatch = useDispatch();
  const logout = useSelector(state => state.authentication.isAuthenticated)

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    
    <header className={classes.header}>
      
      <h1>Redux Auth</h1>
      {logout &&
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header> 
  );
};

export default Header;
