import React from 'react'
import "./Download.css";
import Header from "../../components/Header/Header";
import "./Download.css";
import { useTypewriter } from "react-simple-typewriter";
import Order from "../../components/Order/Order";
import Cactus from "../../images/Cactuus.jpg"
import Free from "../../images/Free.jpg"
import Apps from "../../images/Apps.jpg"
import Footer from "../../components/Footer/Footer";

const Download = () => {
  const [text, count] = useTypewriter({
    words: ["McDonald's App","McDonald's App","McDonald's App"],
    loop: true,
    delaySpeed: 1200,
  })
  return (
    <>
      <Header/>
     <div className="App">
        <div className="Donlowd">
          <h1 className="Download-title">{text}</h1>
          <Order
             image={Cactus}
             title="The Cactus Plant Flea Market Box"
              alt="chips"
            text="Cactus Plant Flea Market is in the house with a limited-edition box design and collectibles. Your faves like Big Mac® and 10 piece Chicken McNuggets® with a side of art? Yes please ::) Order in the app, 10/3-10/30."
            parag="*At participating McDonald's for a limited time. While supplies last. Mobile order & pay at participating McDonald’s. Download and registration required."
            buttonText="Order in the App"
          />
                    <Order
             image={Free}
             title="Free Large Fries with App Download*"
              alt="chips"
            text="Grab a handful or enjoy them one by one. However you like ‘em, get large Fries for free when you download the McDonald’s app."
            parag="*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's until 10/31/22. May take up to 48 hours to appear in your deals. Free Loyalty Reward Points valid 1x thru 12/31/22 for first time MyMcDonald’s Rewards users. Program available only at participating McDonald’s. Excludes delivery. McD app download and registration required."
            buttonText="Download the App"
          />
            <Order
             image={Apps}
             title="Deliciousness At Your Fingertips"
              alt="chips"
            text="Download the app for exclusive deals and easy ordering."
            buttonText="Download the App"
            
 
          />
        </div>
        <div className="paragraph-Donload">
          <h1 className="Deals">Deals and Much More</h1>
          <p>With the McDonald’s app, you’ll get access to exclusive deals. <br/>Use the app to order ahead and pass the line with Mobile Order & Pay plus join MyMcDonald’s Rewards to earn points on every order to redeem for free McDonald's.</p>
        </div>
        <br />
        <br />
        <br/>
        <Footer/>
      </div>
    </>
 
  )
}

export default Download