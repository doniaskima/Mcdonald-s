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
      </Routes>
    </div>
  );
}

export default App;
