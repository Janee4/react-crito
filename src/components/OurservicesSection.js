import React from 'react'


import thinLine from '../assets/images/thin-line (2).svg'
import line from '../assets/images/line.svg'


const OurservicesSection = () => {
  return (
    <section className="we-provide-part4">
  <div className="thin-line">
    <img src= {thinLine} alt=""/>
  </div>
  <div className="container">
    <div className="main-text">
      <p>Our Services</p>
      <h2>We Provide The Best<br/>Service For Consulting</h2>
    </div>        
    <div className="boxes">
      <div className="box-1">
        <img src={line} alt="line"/>
        <h3>Business Advice</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
        <a className="btn-go-to" href=""><i className="fa-solid fa-arrow-right"></i></a>
      </div>
      <div className="box-2">
        <img src={line} alt="line"/>
        <h3>Startup Business</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
        <a className="btn-yellow-box" href=""><i className="fa-solid fa-arrow-right"></i></a>
      </div>
      <div className="box-3">
        <img src={line} alt="line"/>
        <h3>Financial Advice</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
        <a className="btn-go-to" href=""><i className="fa-solid fa-arrow-right"></i></a>
      </div>
      <div className="box-4">
        <img src={line} alt="line"/>
        <h3>Risk Management</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
        <a className="btn-go-to" href=""><i className="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
    <div className="centered-browse-services-button">
      <div className="button-under-boxes">
        <a className="btn-transparent" href="Browse-services.html">Browse Services <i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
    </div>
  </div>                  
</section>
  )
}

export default OurservicesSection