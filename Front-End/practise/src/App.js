
import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrapYardNavbar from './components/ScrapYardNavbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AfterLoginCustomer from './pages/AfterLoginCustomer';
import Cart from './pages/Cart';



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logi" element={<Login />} />
          <Route path="/ScrapMaterial" element={<AfterLoginCustomer/>}/>
          <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
