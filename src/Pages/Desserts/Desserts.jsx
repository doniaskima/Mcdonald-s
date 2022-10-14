import { useEffect ,useState} from "react";
import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header"
import Oreo from "../../images/Desserts/Oreo.jpg"
import deseert2 from "../../images/Desserts/ChoclateShake.jpg"
import deseert3 from "../../images/Desserts/HotFudge.jpg"
import deseert4 from "../../images/Desserts/m&m7.jpg"
import deseert5 from "../../images/Desserts/vanillaCone.jpg"

 
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
        words: ["Desserts & Shakes"],
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
                        <Cart picture={Oreo} price="19" name="McFlurry® with OREO® Cookies" />
                        <Cart picture={deseert2} price="13" name="Strawberry Shake" />
                        <Cart picture={deseert4} price="34" name="McFlurry® with M&M'S® Candies" />
                        <Cart picture={deseert3} price="23" name="Hot Fudge Sundae" />
                        <Cart picture={deseert5} price="19" name="Vanilla Cone" />
            
        </div>
        </div>
    </div>
    </>
  )
}

export default McNuggets