import React from 'react'
import "./Order.css";
const Order = ({image, text, alt, title}) => {
  return (
  
    <div className="container">
        <div className="eachOne">
            <div className="img-left">
                <img src={image} alt={alt} />
            </div>
            <div className="text-right">
                <h1 className="title">{title}</h1>
                <p className="text">
                    {text}
                </p>
                <a href="/BuyNow">Apply Now to be a Change Leader</a>
            </div>
        </div>
    </div>
  )
}

export default Order