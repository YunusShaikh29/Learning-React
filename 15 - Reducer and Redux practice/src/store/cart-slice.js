import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cartSlice',
    initialState : {
        items : [],
        totalQuantity : 0,
        // totalPriceAmount : 0
    },
    reducers : {
        addCartItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            if(!existingItem){
                state.items.push({
                    itemId : newItem.id,
                    price : newItem.price,
                    quantity : 1,
                    totalPrice : newItem.price,
                    name : newItem.name
                })
            }else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItem(state,action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            if(!existingItem){
                state.items = state.items.filter(item => item.id !== id)
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice