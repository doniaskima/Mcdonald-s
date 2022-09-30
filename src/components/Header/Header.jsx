import { useEffect } from "react";
import Magdo from "../../assets/logo.jpg";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import "./Header.css";

export default function () {
    return (
        <>
            <div>
                <nav>
                    <div className="website">
                        <img src={Magdo} alt="Magdo" />
                        <h1>Welcome to McDonald's</h1>
                    </div>
                    <ul className="desktop-list">
                        <a href="#home">Home</a>
                        <a href="#menu">Menu</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </ul>
                    <ul className="mobile-list">
                        <div>

                        </div>
                        <div className="list">
                            <a href="#home">Home</a>
                            <a href="#menu">Menu</a>
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
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
                                <FaUser className="faUser"/>
                                <h3>Sign in</h3>
                            </a>
                            <div>
                                <FaShoppingBag className="icon" />
                                <div className="num">
                                    {
                                       
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="bars">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

