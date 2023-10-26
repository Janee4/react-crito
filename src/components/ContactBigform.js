import React from 'react'

const ContactBigform = () => {
  return (
    <section className="big-form">
  <div className="container">
    <div className="title">
      <h2>Leave us a message<br/>for any information.</h2>
    </div>
    
    
    <form className="form-1" id="name" action="#" method="post">
      <input type="text" placeholder="Name*"/>  
    </form>
    <span>Please enter a valid name </span>
    
    <form className="form-2" action="#" method="post">
      <input type="text" placeholder="Email*"/>
    </form>
    <span>Please enter a valid name </span>
    <form className="form-3" action="#" method="post">
      <input type="text" placeholder="Your Message*"/>
    </form>
    <span>Please enter a valid name </span>
    <div className="btn">
      <a className="btn-send-message" id="login" href="login.html">Send Message<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
  </div>
</section>
  )
}

export default ContactBigform