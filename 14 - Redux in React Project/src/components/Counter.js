import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);
  const showORHide = useSelector(state => state.showCounter)

  const incrementCounter = () => {
    dispatch({ type : 'increment'})
  }

  const increaseBy10 = () => {
    dispatch({type : 'increase', amount : 10})
  }

  const decrementCounter = () => {
    dispatch({type : 'decrement'})
  }

  const toggleCounterHandler = () => {
    dispatch({type : 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showORHide && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={increaseBy10}>increaseBy 10</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
