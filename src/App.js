import './App.css';
import HeroPage from "./components/HeroPage/HeroPage"
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Download from "./Pages/Download/Download";
import Menu from "./Pages/Menu/Menu";
import Rewards from "./Pages/Rewards/Rewards";
import Auth from "./Pages/Auth/Auth"
import Burgers from "./Pages/Burgers/Burgers"
import Breakfast from "./Pages/Breakfast/Breakfast"
import Chicken from "./Pages/Chicken/Chicken"
import McNuggets from "./Pages/McNuggets/McNuggets"
import Cactus from "./Pages/Cactus/Cactus"
import Fries from "./Pages/Fries/Fries"
import HappyMeal from "./Pages/HappyMeal/HappyMeal"

 
 
function App() {
  return (
    <div className="app">
     <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Rewards" element={  <Rewards />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Burgers" element={<Burgers />} />
        <Route path="/breakfast" element={  <Breakfast />} />
        <Route path="/Chicken" element={  <Chicken />} />
        <Route path="/McNuggets" element={  <McNuggets />} />
        <Route path="/Cactus" element={<Cactus />} />
        <Route path="/Fries" element={  <Fries />} />
        <Route path="/HappyMeal" element={  <HappyMeal />} />
      </Routes>
    </div>
  );
}

export default App;
