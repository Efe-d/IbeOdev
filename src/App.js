import React from "react";
import "./App.css";
import Home from "./Components/homeScreen";
import Contact from "./Components/contactScreen";
import Lang1 from "./Components/Langs/plang1Screen";
import Lang2 from "./Components/Langs/plang2Screen";
import Lang3 from "./Components/Langs/plang3Screen";
import Lang4 from "./Components/Langs/plang4Screen";
import Lang5 from "./Components/Langs/plang5Screen";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";

function App() {
  return (
    <div className="MainContainer">
      <div className="navbar">
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/Contact"> Contact</Link>
          <Link to="/lang1"> React Native </Link>
          <Link to="/lang2"> JavaScript </Link>
          <Link to="/lang3"> C# </Link>
          <Link to="/lang4"> Python </Link>
          <Link to="/lang5"> Java </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/lang1" element={<Lang1 />} />
        <Route path="/lang2" element={<Lang2 />} />
        <Route path="/lang3" element={<Lang3 />} />
        <Route path="/lang4" element={<Lang4 />} />
        <Route path="/lang5" element={<Lang5 />} />
      </Routes>
    </div>
  );
}

export default App;
