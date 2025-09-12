import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./component/Footer/Footer";
import Skills from "./Pages/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import HeroBanner from "./component/HeroBanner/HeroBanner";
import About from "./Pages/About";


const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroBanner/>
      <About/>
      <Projects/>
      <Skills/>
      
      <Footer />
    </Router>
  );
};

export default App;
