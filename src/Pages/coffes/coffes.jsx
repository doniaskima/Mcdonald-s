import { useEffect ,useState} from "react";
import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header"
import "./coffes.css";
import coffe2 from "../../images/coffes/coffe2.jpg"
import coffe3 from "../../images/coffes/coffe3.jpg"
import coffe4 from "../../images/coffes/coffe4.jpg"
import coffe5 from "../../images/coffes/coffe5.jpg"
 
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
        words: ["McCafé® Coffees"],
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
                        <Cart picture={coffe2} price="19" name="Mocha Frappé" />
                        <Cart picture={coffe3} price="13" name="Iced Caramel Latte" />
                        <Cart  picture={coffe5} price="13" name="Iced Caramel Macchiato" />
            {
            data.map((item,index)=>{
              return(
                <Cart
                  key={index}
                  id={item._id}
                  picture={coffe4}
                  name="Iced French Vanilla Latte"
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

export default McNuggets