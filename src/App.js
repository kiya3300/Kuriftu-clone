import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
function App() {
  return (
    <>
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>

        <Routes>
          <Route path='/services' exact element={<Services/>} />
          </Routes>
        <Routes>
          <Route path='/products' exact element={<Products/>} />
        </Routes>
        <Routes>
          <Route path='/sign-up' exact element={<SignUp/>} />
        </Routes>
     
    </>
  );
}

export default App;
