import React from 'react'
import "./Cart.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";
const Cart = ({ delay, name, price, picture, id }) => {
    const dispatch = useDispatch();
    function add() {
        dispatch(addToCart({
          name,
          price,
          id,
          picture,
          quantity: 1
        }))
      }
  return (
      <>
          {
                  <div className="item">
                      <img src={picture} alt="item-image" />
                      <div>
                          <h1>{name}</h1>
                          <h3>{price} $</h3>
                      </div>
                      <button onClick={add}>Add to Cart</button>
                  </div>         
          }
      </>
  )
}

export default Cart