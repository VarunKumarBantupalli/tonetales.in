import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';



function App() {

  
  


  return (
    <>
      <Router>
      
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
