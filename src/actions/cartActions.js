import * as actionTypes from "../constants/actionTypes.js";

export function addToCart(item){
  return{
    type:actionTypes.ADD_TO_CART,
    payload:item
  }
}

export function removeFromCart(id){
  return{
    type:actionTypes.REMOVE_FROM_CART,
    payload:id
  }
}

export function increaseQuantity(id){
  return{
    type:actionTypes.INCREASE_QUANTITY,
    payload:id
  }
}

export function decreaseQuantity(id){
  return{
    type:actionTypes.DECREASE_QUANTITY,
    payload:id
  }
}