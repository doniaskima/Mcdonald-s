import React from 'react'
import "./About.css";
import Header from "../../components/Header/Header";
import whatis from "../../images/whatis.jpg"
import Commitement from "../../images/Commitement.jpg"
import AboutFood from "../../images/AboutFood.jpg"
import Order from "../../components/Order/Order";
import Footer from "../../components/Footer/Footer";
const About = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="about-food">
        <h1 className="About-title">About Our Food</h1>
          <img src={AboutFood} alt="about-food" />
          <br />
          <br />
          <h1>We’re Passionate About Our Food</h1>
          <p>From adding more balanced options to our Happy Meal®, to serving up fresh beef Quarter Pounder® burgers that are cooked when you order, we’re always finding ways to show our commitment to our customers and our food. </p>
          <br />
          <br />
          <div className="gridd">
          <Order
        image={Commitement}
        title="Commitment to Quality*"
        text="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it."
        buttonText="Learn More"
            />
                      <Order
        image={whatis}
        title="What's in Your Food*"
        text="Find out what makes our ingredients special."
        
        buttonText="Learn More"
          />
          </div>
        </div>
 
      </div>
      <Footer/>
   </>
  )
}

export default About