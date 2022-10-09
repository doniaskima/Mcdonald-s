import React from 'react'
import "./Menu.css";
import Header from "../../components/Header/Header";
import Item from "../../components/Item/Item";
import BigMac from "../../images/BigMac.jpg"
import Chicken from "../../images/Chicken.jpg"
import Coffe from "../../images/Coffe.jpg"
import Fries from "../../images/Fries.jpg"
import Sausage from "../../images/Sausage.jpg";
import VaniilaSnake from "../../images/VaniilaSnake.jpg";
import { useTypewriter } from "react-simple-typewriter";
import Breakfast from "../../images/Breakfast/BrakFastt.jpg"
import Cactus from "../../images/CactusPlant.jpg";
import Bakery from "../../images/Bakery.jpg"
import HappyMeal from "../../images/HappyMeal.jpg"
import Coca from "../../images/Coca.jpg";
import { Link } from 'react-router-dom';
 
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
              <div className="brakfast">
                <img src={Breakfast} alt="brakfast" className="featured-img" />
                <h1>Breakfast</h1>
               <Link to="/breakfast"><a className="featured-btn">view Menu</a></Link>
              </div>
              <div className="brakfast">
              <img src={BigMac} alt="Burgers" className="featured-img" />
                <h1>Burgers</h1>
                <Link to="/Burgers"><a className="featured-btn">view Menu</a></Link>
              </div>
              <div className="brakfast">
              <img src={Chicken} alt="brakfast" className="featured-img" />
                <h1>Chicken & Fish <br/> Sandwiches</h1>
                <Link to="/Chicken"><a className="featured-btn">view Menu</a></Link>
              </div>
              <div className="brakfast">
              <img src={Sausage} alt="brakfast" className="featured-img"/>
                <h1>McNuggets® and<br/> Meals</h1>
                <Link to="/McNuggets®"><a className="featured-btn">view Menu</a></Link>
              </div>
              <div className="brakfast">
              <img src={Cactus} alt="brakfast" className="featured-img"/>
                <h1>The Cactus Plant Flea<br/> Market Boxes</h1>
                <Link to="/Cactus"><a className="featured-btn">view Menu</a></Link>
              </div>
              <div className="brakfast">
              <img src={Fries} alt="brakfast" className="featured-img"/>
                <h1>Fries & Sides</h1>
                <Link to="/Fries & Sides"><a className="featured-btn">view Menu</a></Link>
              </div>
              <div className="brakfast">
              <img src={HappyMeal} alt="HappyMeal" className="featured-img"/>
                <h1>Happy Meal®</h1>
                <Link to="/Happy Meal®"><a className="featured-btn">view Menu</a></Link>
              </div>
              <div className="brakfast">
              <img src={Coffe} alt="brakfast" className="featured-img"/>
                <h1>McCafé® Coffees</h1>
                <h3>Hot Coffee Drinks</h3>
             <Link to="/Coffees"><a className="featured-btn">view Menu</a></Link>
              </div>
              <div className="brakfast">
              <img src={Bakery} alt="brakfast" className="featured-img"/>
                <h1>McCafé® Bakery</h1>
             <Link to="/Bakery"><a className="featured-btn">view Menu</a></Link>
              </div>
              <div className="brakfast">
              <img src={Coca} alt="brakfast" className="featured-img"/>
                <h1>Beverages</h1>
                <h3>Soft Drinks</h3>
             <Link to="/Beverages"><a className="featured-btn">view Menu</a></Link>
              </div>
              <div className="brakfast">
              <img src={VaniilaSnake} alt="brakfast" className="featured-img"/>
                <h1>Desserts & Shakes</h1>
             <Link to="/Desserts"><a className="featured-btn">view Menu</a></Link>
              </div>
            </div>
          </div>
         </div>
       </div>
   </>
 
  )
}

export default Menu