import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import appStore from "../../assets/appStore.png";
import GooglePlay from "../../assets/GooglePlay.png";
import LittleMagdo from "../../assets/little-magdo.jpg"
 

const Footer = () => {
  return (
    <div className="Footer">
      <div className="info">
        <div className="title-list">      
          <ul>
            <h3 className="footer-title">About Us</h3>
            <li><a href="#" className="List">About Us</a></li>
            <li> <a href="#" className="List">Our History</a></li>
            <li><a href="#" className="List">Leadership Team</a></li>
            <li><a href="#" className="List">Values In Action</a></li>
            <li> <a href="#" className="List">Franchise Info</a></li>
            <li><a href="#" className="List">Recalls & Alerts</a></li>
            <li><a href="#" className="List">Real Estate</a></li>
            <li><a href="#" className="List">Digital Accessibility</a></li>
            <li><a href="#" className="List">Investor Relations</a></li>
          </ul>
        </div>
        <div className="title-list">    
          <ul>
            <h3 className="footer-title">Services</h3>
            <li><a href="#" className="List">Wi-Fi</a></li>
            <li><a href="#" className="List">Gift Cards</a> </li>
            <li><a href="#" className="List">PlayPlaces & Parties</a></li>
            <li><a href="#" className="List">McDelivery®</a></li>
            <li><a href="#" className="List">Mobile Order & Pay</a></li>
            <li><a href="#" className="List">Trending Now</a></li>
            <li><a href="#" className="List">McDonald’s Merchandise</a></li>
            <li><a href="#" className="List">Family Fun Hub</a></li>
            <li><a href="#" className="List">MyMcDonald's Rewards</a></li>
            <li><a href="#" className="List">McCafé®</a></li>
          </ul>
        </div>
        <div className="title-list">
          <ul>
            <h3 className="footer-title">Community</h3>
            <li><a href="#" className="List">Community</a></li>
            <li><a href="#" className="List">HACER® Scholarships for Hispanic Students</a></li>
            <li><a href="#" className="List">Ronald McDonald House Charities</a></li>
            <li><a href="#" className="List">McDonald’s Asian Pacific American</a></li>
            <li><a href="#" className="List">McDonald’s International</a></li>
            <li><a href="#" className="List">Black and Positively Golden</a></li>
            <li><a href="#" className="List">McDonald’s LGBTQ+</a></li>
          </ul>

        </div>
        <div className="title-list">      
          <ul>
            <h3 className="footer-title">Contact Us</h3>
            <li> <a href="#" className="List">Contact Us</a></li>
            <li> <a href="#" className="List">Gift Card FAQs</a></li>
            <li><a href="#" className="List">Employment</a></li>
            <li><a href="#" className="List">Restaurant Feedback</a></li>
            <li><a href="#" className="List">Frequently Asked Questions</a></li>
          </ul>

        </div>

      </div>
      <div className="icons-footer">
        <div className="social-icons">
        <a href="https://www.facebook.com/McDonalds/" className="icon-footer"><FacebookIcon  className="icon-footer" /></a>
         <a href="https://www.youtube.com/channel/UCRI5ZedBs0_BYY4PlxD6m7w" className="icon-footer" > <YouTubeIcon  className="icon-footer"/></a>
          <a href="https://twitter.com/mcdonalds" className="icon-footer"><TwitterIcon  className="icon-footer" /></a>
          <a href="https://www.instagram.com/mcdonalds/" className="icon-footer"><InstagramIcon  className="icon-footer" /></a>
        </div>
        <div className="Donlowd">
            <a href="https://apps.apple.com/us/app/mcdonalds-mobile/id922103212"><img src={appStore}/></a>
            <a href="https://play.google.com/store/apps/details?id=com.mcdonalds.app&hl=en"><img src={GooglePlay}/></a>
        </div>
      </div>
      <hr className="hr"/>
      <div className="last-footer">
        <div className="line-one">
          <a>Privacy (Updated)</a>
          <a>California Privacy Notice</a>
          <a>Terms & Conditions</a>
           <a>Digital Accessibility</a>
           <img src={LittleMagdo} className="little-amazon"/>
           <a>© 2017 - 2022 McDonald's. All Rights Reserved</a>
        </div>
        <div className="line-one">
          <a>Do Not Sell My Personal Information</a>
          <a>Cookie Settings</a>
        </div>
      </div>
    </div>
  )
}

export default Footer