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
import Biscuit from "../../images/Biscuit.jpg";
import Cheesburger from "../../images/Cheesburger.jpg";
import Pepeeer from "../../images/Pepeeer.jpg";
import {  useTypewriter } from "react-simple-typewriter"
const Menu = () => {
  const [text, count] = useTypewriter({
    words: ["McDonald's Menu"],
    loop: true,
    delaySpeed: 1200,
  })
  return (
    <>
       <Header/>
       <div className="container">
         <div className="MagdoMenu">
            <div className="featured">
              <div className="featuredTitle"> 
               <h1>{text}</h1>
               <h2>Featured Favorites</h2>
              </div>
 
                  <div className="food">
                   <Item
                   img1={BigMac}
                   img2={Chicken}
                   img3={McNuggets}
                   img4={Sausage }
                   title4="Spicy Crispy Chicken Sandwich"
                   title1="Spicy Crispy Chicken Sandwich"
                   title2="Big Mac®"
                   title3="Chicken McNuggets®"
                   img5={Sausage }
                   title5="Spicy Crispy Chicken Sandwich"
                    />
                    <Item
                   img1={Fries}
                   img2={withCheese}
                   img3={Sausage }
                   title1="Spicy Crispy Chicken Sandwich"
                   title2="Quarter Pounder®* with Cheese"
                   title3="Sausage Burrito"
                   img4={Sausage }
                   title4="Spicy Crispy Chicken Sandwich"
                   img5={Sausage }
                   title5="Spicy Crispy Chicken Sandwich"
                    />
                                   <Item
                   img1={HotCaramel}
                   img2={VaniilaSnake}
                   img3={Coffe}
                   title1="Hot Caramel Sundae"
                   title2="Vanilla Shake®"
                   title3="Iced Coffee®"
                   img5={Sausage }
                   title5="Spicy Crispy Chicken Sandwich"
                   img4={Sausage }
                   title4="Spicy Crispy Chicken Sandwich"
                    />
                  </div>
                  <Item
                   img1={Biscuit}
                   img2={Cheesburger}
                   img3={Pepeeer}
                   title1="Sausage Biscuit with Egg Meal"
                   title2="Cheeseburger Combo Meal"
                   title3="Dr Pepper®"
                   img4={Sausage }
                   title4="Spicy Crispy Chicken Sandwich"
                   img5={Sausage }
                   title5="Spicy Crispy Chicken Sandwich"
                    />
               
             </div>
         </div>
       </div>



   </>
 
  )
}

export default Menu