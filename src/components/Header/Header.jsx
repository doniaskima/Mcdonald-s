import { useEffect } from "react";
import Magdo from "../../assets/logo.jpg";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import "./Header.css";
import { useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

export default function () {
 
    const cartItems = useSelector(state => state.cart.items);
    const num = useSelector(state => state.cart.quantity);
    const total = useSelector(state => state.cart.total);
  
    useEffect(() => {
      function toggleAnimation() {
        if (window.scrollY > 0) {
          document.querySelector("nav").classList.add("sticky");
        }
        else {
          document.querySelector("nav").classList.remove("sticky");
        }
      }
  
      document.addEventListener("scroll", toggleAnimation);
  
      return () => { document.removeEventListener("scroll", toggleAnimation); }
    }, []);
  
    function clickHandler() {
      document.querySelector(".mobile-list").classList.toggle("opened");
      document.querySelector(".bars").classList.toggle("clicked");
    }
  
    function handler(){
      document.querySelector(".filter").classList.toggle("seen");
      document.querySelector(".cart").classList.toggle("translated");
    }
  
    function closeHandler(){
      document.querySelector(".filter").classList.toggle("seen");
      document.querySelector(".cart").classList.toggle("translated");
    }
  

    return (
<>
      <div className="filter" onClick={closeHandler}></div>
      <nav>
        <div className="website">
         
          <img src={Magdo} alt="burger image" />
 
           <h1> McDonald’s </h1>  
        
        </div>
          <ul className="desktop-list">
            <Link to="/Menu"><a href="/Menu" >Our Menu</a></Link>
            <Link to="/Download"><a href="/Download" >Download App</a></Link>
            <Link to="/Rewards"><a href="/Rewards" >MyMcDonald's Rewards</a></Link>
            <Link to="/About"><a href="/About" >About Our Food</a></Link>
        </ul>
        <ul className="mobile-list">
          <div>

          </div>
          <div className="list">
          <Link to="/Menu"><a href="/Menu" >Our Menu</a></Link>
            <Link to="/Download"><a href="/Download" >Download App</a></Link>
            <Link to="/Rewards"><a href="/Rewards" >MyMcDonald's Rewards</a></Link>
            <Link to="/About"><a href="/About" >About Our Food</a></Link>
          </div>
          <a href="/auth">
            <FaUser />
            <h3>
              Sign in
            </h3>
          </a>
        </ul>
        <div className="wrap">
          <div className="container">
            <a href="/auth">
              <FaUser />
              <h3>Sign in</h3>
            </a>
            <div onClick={handler}>
              <FaShoppingBag className="icon" />
              <div className="num">
                {
                  num
                }
              </div>
            </div>
          </div>
          <div className="bars" onClick={clickHandler} >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </nav>
      <div className="cart">
        <div className="top">
          <FaTimes onClick={closeHandler} className="icon"  />
          <div className="cart-items">
            {
              cartItems.map((item,index)=>{
                return(
                  <CartItem 
                    key={index}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    picture={item.picture}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="bottom">
          <h3>Total :<span> {total} $</span></h3>
          <button>Checkout</button>
        </div>
      </div>
    </>
    )
}