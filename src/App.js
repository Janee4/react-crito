import React from 'react'
import Header from './components/HeaderSection'
import './App.css';
import BodySection from './components/BodySection';
import Footer from './components/Footer';
import HeaderSection from './components/HeaderSection';
// import './App.scss';

const App = () => {
  return (
    <div>
      <HeaderSection />
      <BodySection />
      <Footer/>
      
    </div>
  )
}

export default App