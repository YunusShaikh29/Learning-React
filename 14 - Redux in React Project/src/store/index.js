import { configureStore, createSlice } from '@reduxjs/toolkit';
// import {createStore} from 'redux'
import counterReducer from './counter'
import authReducer from './auth'
// const redux = require('redux')




// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment'){
//         return {
//             counter : state.counter + 1,
//             showCounter : state.showCounter,
//         };
//     }
//     if(action.type === 'increase'){
//         return {
//             counter : state.counter + action.amount,
//             showCounter : state.showCounter,
//         }
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter : state.counter - 1,
//             showCounter : state.showCounter,
//         };
//     }

//     if(action.type === 'toggle'){
//         return {
//             counter : state.counter,
//             showCounter : !state.showCounter,
//         }
//     }
//     return state;
// }

// const store = createStore(counterReducer);
const store = configureStore({
    reducer : {
        counter : counterReducer,
        authentication : authReducer,
    }  
});


export default store;