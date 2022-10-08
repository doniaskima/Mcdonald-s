import React from 'react'
import "./Order.css";
const Order = ({image, text, alt, title, parag,buttonText}) => {
  return (
  
    <div className="container">
        <div className="eachOne">
            <div className="img-left">
                <img src={image} alt={alt} className="food-img" />
            </div>
            <div className="text-right">
                <h1 className="title">{title}</h1>
                <p className="text">
                    {text}
                </p>
                <p className="tiny">{parag}</p>
                <a href="/BuyNow" className="btn">{buttonText}</a>
            </div>
        </div>
    </div>
  )
}

export default Order