import React from 'react'



import logo from '../assets/images/Logo.svg'
const NavSectionContainer = () => {
  return (
      <div className="container">
      <a className="crito" href="flexbox-2.html"><img src={logo} alt="crito logotype" /></a>
      <button className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
      <div className="menu"> 
        <div className="top-menu"> 
          <div className="contact-information">
            <div className="content-box">
              <i className="fa-regular fa-phone-volume"></i>
              + 46 (8) 121 470 50 
            </div>
            <div className="content-box">
              <i className="fa-regular fa-envelope"></i>
              info@crito.com 
            </div>
            <div className="content-box last">
              <i className="fa-solid fa-location-dot"></i>
              Sveavägen 31, 111 34 STOCKHOLM
            </div>
          </div>
        <div className="social-media"> 
            <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a id="linked" href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div> 
      </div>
      <div className="main-menu"> 
        <nav>
          <a className="active" href="flexbox-3.html">Home</a>
          <a href="home.html">Service</a>
          <a href="home.html">News</a>
          <a href="contact.html">Contact</a>
        </nav> 
        <a className="btn-yellow btn-login" id="login" href="login.html">Login <i className="fa-regular fa-arrow-up-right"></i></a>
      </div>
    </div>
    </div>
  )
}

export default NavSectionContainer