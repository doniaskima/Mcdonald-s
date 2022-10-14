import { useEffect ,useState} from "react";
import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header"
import bakery1 from "../../images/bakery/bakery1.jpg"
import bakery2 from "../../images/bakery/bakery2.jpg"
import bakery3 from "../../images/bakery/bakery3.jpg"
import bakery4 from "../../images/bakery/bakery5.jpg"
 
import BaseUrl from "../../BaseUrl/BaseURL";
import { useTypewriter } from "react-simple-typewriter";
const McNuggets = () => {
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
        words: ["McCafé® Bakery"],
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
                        <Cart picture={bakery1} price="19" name="Apple Fritter" />
                        <Cart picture={bakery2} price="13" name="Cheese Danish" />
                        <Cart picture={bakery3} price="13" name="Blueberry Muffin" />
                        <Cart  picture={bakery4} price="13" name="Cinnamon Roll with Cream Cheese Icing" />
        
             
        </div>
        </div>
    </div>
    </>
  )
}

export default McNuggets