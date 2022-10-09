import React from 'react';
import "./Item.css";

const Item = ({title1,title2,title3,img1,img3,img2,title4,img4}) => {
  return (
    <>
     <div className="images">
       <div className="description">
       <div>
          <img className="FoodImg" src={img1} alt="food"/>
          <h3>{title1}</h3>
       </div>
       <div>
          <img className="FoodImg" src={img2} alt="food"/>
          <h3>{title2}</h3>
       </div>
       <div>
          <img className="FoodImg" src={img3} alt="food"/>
          <h3>{title3}</h3>
       </div>
       <div>
          <img className="FoodImg" src={img4} alt="food"/>
          <h3>{title4}</h3>
       </div>
      </div>
    </div>
    </>
  )
}

export default Item