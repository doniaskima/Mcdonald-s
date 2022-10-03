import { useEffect } from "react";
import Magdo from "../../assets/logo.jpg";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import "./Header.css";
import { FaTimes } from "react-icons/fa";

export default function () {
    function clickHandler() {
        document.querySelector(".mobile-list").classList.toggle("opened");
        document.querySelector(".bars").classList.toggle("clicked");
    }

    function closeHandler() {
        document.querySelector(".filter").classList.toggle("seen");
        document.querySelector(".cart").classList.toggle("translated");
    }
    return (
        <>
            <div></div>
            <nav>
                <div className="website">
                    <img src={Magdo} alt="Magdo" />
                    <h1>Welcome to McDonald's</h1>
                </div>
                <ul className="desktop-list">
                    <a href="#home">Home</a>
                    <a href="#menu">Our Menu</a>
                    <a href="#about">MyMcDonald's Rewards</a>
                    <a href="#contact">About Our Food</a>
                </ul>
                <ul className="mobile-list">
                    <div>

                    </div>
                    <div className="list">
                        <a href="#home">Home</a>
                        <a href="#menu">Our Menu</a>
                        <a href="#about">MyMcDonald's Rewards</a>
                        <a href="#contact">About Our Food</a>
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
                            <FaUser className="faUser" />
                            <h3>Sign in</h3>
                        </a>
                        <div>
                            <FaShoppingBag className="icon" />
                            <div className="num">
                            </div>
                        </div>
                        <div className="bars" onClick={clickHandler}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>

                </div>
            </nav>
            {/* <div className="cart">
                <FaTimes className="icon" onClick={closeHandler} />
                <div className="cart-items">
                </div>
            </div> */}
            {/* <div className="bottom">
                <h3>Total :<span>   $</span></h3>
                <button>Checkout</button>
            </div> */}

        </>
    )
}