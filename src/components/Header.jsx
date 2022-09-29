import { useEffect } from "react";
import Magdo from "../assets/logo.jpg";
import { FaUser } from "react-icons/fa";


export default function () {
    return (
        <>
            <div>
                <nav>
                    <img src={Magdo} alt="magdo" />
                    <h1>Welcome to Magdo</h1>
                </nav>
            </div>
            <ul className="list">
                <a href="#home" >Home</a>
                <a href="#menu" >Menu</a>
                <a href="#about" >about</a>
                <a href="#contact" >Contact</a>
            </ul>
            <ul className="mobile-list">
                <div></div>
                <div className="listMobile">
                    <a href="#home">Home</a>
                    <a href="#menu">Menu</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </ul>
            <div className="wrap">
                <div className="container">
                    <a href="/auth">
                        <FaUser />
                        <h3>Sign in</h3>
                    </a>
                </div>
            </div>
        </>
    )
}

