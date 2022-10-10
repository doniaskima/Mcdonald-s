import { useEffect ,useState} from "react";
import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header"
import "./McNuggets.css";
import McNuggets1 from "../../images/McNuggets/McNuggets1.jpg"
import McNuggets2 from "../../images/McNuggets/McNuggets2.jpg"
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
        words: ["McNuggets® and Meals"],
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
            <Cart  picture={McNuggets1} price="19" name="Chicken McNuggets®" />
            <Cart  picture={McNuggets2} price="19" name="10 Piece Chicken McNuggets®" />
             
        </div>
        </div>
    </div>
    </>
  )
}

export default McNuggets