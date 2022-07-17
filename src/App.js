import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from  './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact  element={<Home />}/>
        <Route path='/services' exact  element={<Services />}/>
        <Route path='/products' exact  element={<Products />}/>
        <Route path='/sign-up' exact  element={<SignUp />}/>
      </Routes>
      <Footer />
    </Router>
       
    </>
     
    
  );
}

export default App;
