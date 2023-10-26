import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';



import Home from './components/View/Home'
import ContactUs from './components/View/ContactUs';


const App = () => {
  return (
  <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Home/>} /> 
          <Route path = '/contact' element={<ContactUs/>} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default App
