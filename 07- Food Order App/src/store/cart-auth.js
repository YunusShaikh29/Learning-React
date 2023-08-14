import React from "react";

const CartContext = React.createContext({
    items : [],
    totalProductAmount : 0,
    addItem : () => {},
    removeItem : () => {}
})

export default CartContext