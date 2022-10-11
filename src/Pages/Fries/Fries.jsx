import { useEffect ,useState} from "react";
import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header"
import "./Fries.css";
import Friess from "../../images/Fries.jpg";
import Sauce1 from "../../images/Sauce1.jpg";
import Sauce2 from "../../images/Sauce2.jpg";
import Sauce3 from "../../images/Sauce3.jpg";
import AppleSlice from "../../images/AppleSlice.jpg";
import BaseUrl from "../../BaseUrl/BaseURL";
import { useTypewriter } from "react-simple-typewriter";
const Fries = () => {
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
        words: ["Fries & Sides"],
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
                        <Cart picture={Friess} price="19" name="World Famous Fries®" />
                        <Cart  picture={AppleSlice} price="29" name="World Famous Fries®" />
                      
                          
        </div>
        <div className="Sauces">
           <h1>Sauces & Condiments</h1>
        </div>
            <div className="grid">
            <Cart picture={Sauce1} price="19" name="Tangy Barbeque Sauce" />
            <Cart picture={Sauce2} price="29" name="Spicy Buffalo Sauce" />
            <Cart  picture={Sauce3} price="29" name="Creamy Ranch Sauce®" />
                            
        </div>
        </div>
    </div>
    </>
  )
}

export default Fries;