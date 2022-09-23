import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'
import data from '../products/Products';
import { CartReducer } from './CartReducers';
const Cart=createContext();

const Context = ({children}) => {
    const[state,dispatch]=useReducer(CartReducer,{
        products: data,
        cart:[]
    });

  return (
    <Cart.Provider value={{state,dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context;

export const CartState=()=>{
    return useContext(Cart);
};