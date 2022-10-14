import { useEffect ,useState} from "react";
import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header"
import Drinks1 from "../../images/Drinks/drink1.jpg"
import Drinks2 from "../../images/Drinks/drink2.jpg"
import Drinks3 from "../../images/Drinks/drink3.jpg"
import Drinks4 from "../../images/Drinks/drink5.jpg"

 
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
        words: ["McCafé® Drinks"],
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
                        <Cart picture={Drinks1} price="19" name="Strawberry Banana Smoothie" />
                        <Cart picture={Drinks2} price="13" name="Mango Pineapple Smoothie" />
                        <Cart picture={Drinks3} price="13" name="Sweet Tea" />
                        <Cart picture={Drinks4} price="13" name="Hot Tea" />
            
        </div>
        </div>
    </div>
    </>
  )
}

export default McNuggets