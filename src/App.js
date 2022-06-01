import React from "react"
import "./images/metricks-white.png"
import './App.css';
import Nav from "./components/nav"
import About from "./components/about"
import Contact from "./components/contact"
import Blog from "./components/blog"


function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Contact />
      <Blog />
    </div>
  );
}

export default App;
