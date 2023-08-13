import classes from "./Cart.module.css";
const Cart = (props) => {
  const CartItems = (
    <ul className={classes["cart-item"]}>
      {[{ id: c1, name: "sushi", price: 30, amount: 2 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>32.64</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}></button>
        <button className={classes.button}></button>
      </div>
    </div>
  );
};

export default Cart;
