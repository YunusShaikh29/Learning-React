import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartProvider from "../../store/CartProvider";

const HeaderCartButton = (props) => {
    const cartCxt = useContext(CartProvider)
  return (
    <CartProvider>
      <button className={classes.button} onClick={props.onShowCart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Card</span>
        <span className={classes.badge}>{cartCxt.totalProductAmount}</span>
      </button>
    </CartProvider>
  );
};

export default HeaderCartButton;
