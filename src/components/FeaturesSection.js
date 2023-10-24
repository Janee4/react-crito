import React from 'react'
import './FeaturesSection.css'

import logos from '../assets/images/Logos.png'
import businessIcon from '../assets/images/business-icon.svg'
import startupBusiness from '../assets/images/startup-business-icon.svg'
import financialAdvice from '../assets/images/financial-advice-icon.svg'
import riskmanagement from '../assets/images/risk-management-icon.svg'

const FeaturesSection = () => {
  return (

    <section className="showcase-2">
        <div className="container">
            <div className="logo-section">
            <img className="logo" src={logos} alt="Logos"/>
            </div>
            </div>
    <div className="container-2">
    <div className="left">
        <p>Features</p>
        <h2>Our Accounting is<br/> trusted by thousand<br/> of companies</h2>
        <a className="btn-learn-yellow" href="learnmore.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
    <div className="right">
        <div className="business-advice">
        <img src={businessIcon} alt="picture of handshake"/>
        <h2>Business Advice</h2>
        <p>Lorem ipsum, dolor sit amet<br/>
        consectetur adipisicing elit.</p>
        </div>
        <div className="startup-business">
        <img src={startupBusiness} alt="picture of a glowing lamp icon with a man inside"/>
        <h2>Startup Business</h2>
        <p>Lorem ipsum, dolor sit amet<br/>
        consectetur adipisicing elit.</p>
        </div>
        <div className="financial-advice">
        <img src={financialAdvice} alt="picture of a diagram"/>
        <h2>Financial Advice</h2>
        <p>Lorem ipsum, dolor sit amet<br/>
        consectetur adipisicing elit.</p> 
        </div>
        <div className="risk-management">
        <img src={riskmanagement} alt="picture of a box and a wheel"/>
        <h2>Risk Management</h2>
        <p>Lorem ipsum, dolor sit amet<br/>
        consectetur adipisicing elit.</p>
        </div>
    </div>
    </div> 
  
  </section>
  
  )
}

export default FeaturesSection