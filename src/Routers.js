import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';  
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Friends from './pages/Friends';

const Routers = () => {
  return <BrowserRouter>
       <Routes>
           <Route path="/" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/home" element={<Home/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/friends" element={<Friends/>}/>
       </Routes>
  </BrowserRouter>;
};

export default Routers;
