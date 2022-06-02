import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About us/About';
import Contact from './components/Contact us/Contact';
import ComingSoon from './components/Coming soon/ComingSoon';
import Blog from './components/Blog/Blog';
import './App.css'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate replace to='/comingsoon'/>} />
          <Route exact path='/comingsoon' element={<ComingSoon />} />
          <Route exact path='/about' element={ <About /> }/>
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/contact' element={ <Contact /> }/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
