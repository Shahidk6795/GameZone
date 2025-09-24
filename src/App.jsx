import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Ubisoft from "./pages/publisher/Ubisoft ";
import TwoK from "./pages/publisher/TwoK";
import Rockstar from "./pages/publisher/Rockstar";
import SantaMonica from "./pages/publisher/SantaMonica ";
import EA from "./pages/publisher/EA";
import Activision from "./pages/publisher/Activision";
import Valve from "./pages/publisher/Valve";
import Capcom from "./pages/publisher/Capcom";
import CDProjekt from "./pages/publisher/CDProjekt";
import NaughtyDog from "./pages/publisher/NaughtyDog";
import QuanticDream from "./pages/publisher/QuanticDream";
import Rocksteady from "./pages/publisher/Rocksteady";
import PlayStation from "./pages/publisher/PlayStation";
import EpicGames from "./pages/publisher/EpicGames";

function App() {
  const [query, setQuery] = useState("");

  return (
<BrowserRouter>
  <Navbar query={query} onQuery={setQuery} />
  <Routes>
    <Route path="/" element={<Home query={query} />} />
    <Route path="/publisher/ubisoft" element={<Ubisoft />} />
    <Route path="/publisher/2k" element={<TwoK />} />
    <Route path="/publisher/rockstar" element={<Rockstar />} />
    <Route path="/publisher/santamonica" element={<SantaMonica />} />
    <Route path="/publisher/ea" element={<EA />} />
    <Route path="/publisher/activision" element={<Activision />} />
    <Route path="/publisher/valve" element={<Valve />} />
    <Route path="/publisher/capcom" element={<Capcom />} />
    <Route path="/publisher/cdprojekt" element={<CDProjekt />} />
    <Route path="/publisher/naughtydog" element={<NaughtyDog />} />
    <Route path="/publisher/quanticdream" element={<QuanticDream />} />
    <Route path="/publisher/rocksteady" element={<Rocksteady />} />
    <Route path="/publisher/sony" element={<PlayStation />} />
    <Route path="/publisher/epicgames" element={<EpicGames />} />
  </Routes>
</BrowserRouter>

  );
}

export default App;
