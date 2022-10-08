import React from 'react'
import "./Menu.css";
import Header from "../../components/Header/Header";
import Item from "../../components/Item/Item";
import BigMac from "../../images/BigMac.jpg"
import McNuggets from "../../images/McNuggets.jpg"
import Chicken from "../../images/Chicken.jpg"
import Coffe from "../../images/Coffe.jpg"
import Fries from "../../images/Fries.jpg"
import withCheese from "../../images/withCheese.jpg";
import Sausage from "../../images/Sausage.jpg";
import Egg from "../../images/Egg.jpg";
import VaniilaSnake from "../../images/VaniilaSnake.jpg";
import HotCaramel from "../../images/HotCaramel.jpg";
const Menu = () => {
  return (
    <>
       <Header/>
       <div className="container">
         <div className="MagdoMenu">
  
             <div className="featured-right">
                 <div className="first-rectangle">
                    
                 </div>
                 <div className="second-rectangle">
                    
                    </div>
              </div>
              <div className="featured-left">
                  <h1>McDonald's Menu</h1>
                  <h2>Featured Favorites</h2>
                  <div className="food">
                   <Item
                   img1={BigMac}
                   img2={Chicken}
                   img3={McNuggets}
                   title1="Spicy Crispy Chicken Sandwich"
                   title2="Big Mac®"
                   title3="Chicken McNuggets®"
                    />
                    <Item
                   img1={Fries}
                   img2={withCheese}
                   img3={Sausage }
                   title1="Spicy Crispy Chicken Sandwich"
                   title2="Quarter Pounder®* with Cheese"
                   title3="Sausage Burrito"
                    />
                                   <Item
                   img1={HotCaramel}
                   img2={VaniilaSnake}
                   img3={Coffe}
                   title1="Hot Caramel Sundae"
                   title2="Vanilla Shake®"
                   title3="Iced Coffee®"
                    />
                  </div>
             </div>
         </div>
       </div>



   </>
 
  )
}

export default Menu