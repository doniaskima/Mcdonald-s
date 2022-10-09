import { useEffect ,useState} from "react";
import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header"
import "./Burgers.css";
import BigMac from "../../images/BigMac.jpg";
import CheeseBacon from "../../images/Burgers/CheeseBacon.jpg"
import DoubleQuarter from "../../images/Burgers/DoubleQuarter.jpg"
import McDouble from "../../images/Burgers/McDouble.jpg"
import Pounder from "../../images/Burgers/Pounder.jpg"
import  Quarter from "../../images/Burgers/Quarter.jpg"
import BaseUrl from "../../BaseUrl/BaseURL";
import { useTypewriter } from "react-simple-typewriter";
const Burgers = () => {
      const [ data , setData ] = useState([]);
    useEffect(() => {
       
        async function fetchData(){
          const response = await fetch(`${BaseUrl}/items/getAllItems`);
          const data = await response.json();
    
          setData(data);
        }
        fetchData();
      } , [])
    const [text, count] = useTypewriter({
        words: ["Burgers"],
        loop: true,
        delaySpeed: 1200,
      })
    return (
        <> 
        <Header/>
      <div className="containerr">
        <div>
          <div className="title-Burgers">
              {text}
          </div>
        <div className="header">
          <h1>Menu</h1>
          <h3>A menu that always makes you fall in love</h3>
              </div>
        <div className="grid">
                        <Cart  picture={BigMac} price="19" name="Big Mac®" />
                        <Cart picture={CheeseBacon} price="34" name="Pounder®* with Cheese" />
                        <Cart picture={DoubleQuarter} price="29" name="Double Quarter with Cheese"/>
                        <Cart picture={McDouble} price="23" name="McDouble®" />
                        <Cart picture={Pounder} price="34" name="Cheeseburger"/>
                        <Cart picture={Quarter} price="48" name="Double Cheeseburger" />
                        {
            data.map((item,index)=>{
              return(
                <Cart
                  key={index}
                  id={item._id}
                  picture={Pounder}
                  name={item.name}
                  price={item.price}
                  type={item.type}
                  delay={ ( index + 1 ) % 4 == 0 ? 400 : ( index + 1 ) % 4 * 100 }
                />
              )
            })
          }
        </div>
        </div>
    </div>
    </>
  )
}

export default Burgers