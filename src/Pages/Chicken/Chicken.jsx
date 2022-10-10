import { useEffect ,useState} from "react";
import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header"
import "./Chicken.css";
import Crispy from "../../images/Chicken/Crispy.jpg"
import Deluxe from "../../images/Chicken/Deluxe.jpg"
import spicy from "../../images/Chicken/spicy.jpg"
import BaseUrl from "../../BaseUrl/BaseURL";
import { useTypewriter } from "react-simple-typewriter";
const Chicken = () => {
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
        words: ["Chicken & Fish Sandwiches"],
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
            <Cart  picture={Crispy} price="19" name="Spicy Crispy Chicken Sandwich" />
            <Cart  picture={Deluxe} price="19" name="Spicy Deluxe Crispy Chicken Sandwich" />
            <Cart  picture={spicy} price="19" name="Bacon, Egg & Cheese Biscuit" /> 
        </div>
        </div>
    </div>
    </>
  )
}

export default Chicken