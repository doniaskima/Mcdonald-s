import { useEffect ,useState} from "react";
import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header"
import "./HappyMeal.css";
import HappyMeall from "../../images/HappyMeall.jpg"
import BaseUrl from "../../BaseUrl/BaseURL";
import { useTypewriter } from "react-simple-typewriter";
const HappyMeal = () => {
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
        words: [" Happy Meal®"],
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
            <Cart  picture={HappyMeall} price="19" name="Hamburger Happy Meal®" />
            <Cart  picture={HappyMeall} price="19" name="4 Piece Chicken McNuggets®" />
             
        </div>
        </div>
    </div>
    </>
  )
}

export default HappyMeal