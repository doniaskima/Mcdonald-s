import { useEffect ,useState} from "react";
import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header"
import "./Breakfast.css";

import Bacon from "../../images/Breakfast/Bacon.jpg"
import BigBreakfast from "../../images/Breakfast/BigBreakfast.jpg"
import HotCakes from "../../images/Breakfast/HotCakes.jpg"
import Fruit from "../../images/Breakfast/Fruit.jpg"
import  SausageBiscuit from "../../images/Breakfast/SausageBiscuit.jpg"
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
        words: ["Breakfast"],
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
            <Cart  picture={SausageBiscuit} price="19" name="Bacon, Egg & Cheese Biscuit" />
            <Cart picture={Bacon} price="34" name="Egg McMuffin®" />
            <Cart picture={BigBreakfast} price="29" name="Sausage McMuffin®"/>
            <Cart picture={HotCakes} price="23" name="HotCakes®" />
            <Cart picture={Fruit} price="34" name="Fruit"/>
            <Cart picture={Bacon} price="48" name="Sausage Biscuit" />     
        </div>
        </div>
    </div>
    </>
  )
}

export default Burgers