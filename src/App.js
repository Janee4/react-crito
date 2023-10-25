import React from 'react'
import Header from './components/HeaderSection'
import './App.css';
import BodySection from './components/BodySection';
import FooterSection from './components/FooterSection';
import Footer from './components/Footer';
// import './App.scss';

const App = () => {
  return (
    <div>
      <Header />
      <BodySection />
      <Footer/>
      
    </div>
  )
}

export default App