import React from 'react';
import "./Rewards.css";
import Order from "../../components/Order/Order";
import chips from "../../assets/chips.jpg";
import Header from "../../components/Header/Header";
import Reward1 from "../../images/Reward1.png";
import Reward2 from "../../images/Reward2.jpg";
import Howto1 from "../../images/Howto1.jpg";
import Howto2 from "../../images/Howto2.jpg";
import Howto3 from "../../images/Howto3.jpg";
import Footer from "../../components/Footer/Footer";
const Rewards = () => {
  return (
    <>
      <Header/>
      <div className="container">
      <div className="Rewards">
        <div className="rewards-title">
          <h1>MyMcDonald’s Rewards</h1>
          <p>With the McDonald’s app, you can earn points on every order to redeem for free McDonald's. Plus, <br/>get access to exclusive daily deals, easily re-order faves and select convenient pickup options with Mobile Order & Pay.</p>
        </div>
          <Order
        image={chips}
        title="Free Fries Now. Free McDonald’s Later.*"
        alt="chips"
        text="Get free large Fries when you download the McDonald’s app and join MyMcDonald’s Rewards. Then, unlock free McDonald’s faves only in the app with 1500 bonus points after your first purchase."
        parag="*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's until 10/31/22. May take up to 48 hours to appear in your deals. Free Loyalty Reward Points valid 1x thru 12/31/22 for first time MyMcDonald’s Rewards users. Program available only at participating McDonald’s. Excludes delivery. McD app download and registration required."
        buttonText="Download the App"
          />
          <div className="MyRewards">
            <div className="RewarOne">
              <img src={Reward1} alt="Reward1" />
              <h1>Free McDonald’s After Your First Order*</h1>
              <p>Join MyMcDonald's Rewards in the app today and unlock a free Hash Browns, Vanilla Cone, McChicken® or Cheeseburger after your first order.<br/>
                Valid 1x thru 12/31/22 for first time MyMcDonald’s Rewards users. Program available only at participating McDonald's. Refer to MyMcDonald’s Program Terms for details. Excludes delivery. McD app download and registration required.</p>
              <a href="/">Download the App</a>
            </div>
            <div className="RewarOne">
              <img src={Reward2} alt="Reward2" />
              <h1>Earn an Extra 1500 Points</h1>
              <p>*Valid 1x thru 12/31/22 at participating McDonald's. This offer is intended only for use by the recipient of the offer and this MyMcDonald's Rewards account. Bonus points may take up to 10 days to appear in your account. Rewards program available only at participating McDonald's. Excludes delivery. McDonald's app download and registration required.</p>
              <a href="/">Link Payment Now in the App</a>
            </div>
            <section id="Howto">
              <div className="titles">
                <h1>How to Earn Points and Redeem Faves</h1>
                <h3>Order like a pro––all it takes is one code or one scan to earn MyMcDonald’s Rewards points, quickly pay and redeem your favorites.</h3>
              </div>
              <div className="howToEarn">
                <div className="how-to-Earn-1">
                  <img src={Howto1} alt="How to earn" />
                  <h1>Easily Earn Points</h1>
                  <p>Select the ‘Earn Points’ tab in the McDonald's app found on the bottom menu bar. Access the 4-digit Drive Thru Code or code to scan at the counter or kiosk. When you place your order in the app, you'll automatically earn your points.</p>
                </div>
                <div className="how-to-Earn-1">
                  <img src={Howto3} alt="How to earn" />
                  <h1>Easily Earn Points</h1>
                  <p>Select the ‘Earn Points’ tab in the McDonald's app found on the bottom menu bar. Access the 4-digit Drive Thru Code or code to scan at the counter or kiosk. When you place your order in the app, you'll automatically earn your points.</p>
                </div>
              </div>
            </section>
          </div>
          <Footer/>
      </div>
 
      </div>
      </>
  )
}

export default Rewards