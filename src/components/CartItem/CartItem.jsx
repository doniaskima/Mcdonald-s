import React from 'react';
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../app/actions/cartActions.js";
import { increaseQuantity , decreaseQuantity } from "../app/actions/cartActions.js";

const CartItem = ({name,id,picture,quantity}) => {

    function remove(){
        dispatch(removeFromCart(id));
      }
    
      function increase(){
        dispatch(increaseQuantity(id));
      }
    
      function decrease(){
        dispatch(decreaseQuantity(id));
      }

  return (
    <>
        <div className="item">
        <div className="left">
          <img src={picture} alt="cart item" />
          <h3>{name}</h3>
        </div>
        <div className="right">
          <div className="actions">
            <span className="minus" onClick={decrease}>-</span>
            <span className="number">{quantity}</span>
            <span className="plus" onClick={increase}>+</span>
          </div>
          <h4>{price * quantity} $</h4>
          <FaTrash className="trash" onClick={remove}/>
        </div>
        </div>
    </>
  )
}

export default CartItem