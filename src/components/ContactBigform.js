import React from 'react'

const ContactBigform = () => {
  return (
    <section className="big-form">
  <div className="container">
    <div className="title">
      <h2>Leave us a message<br/>for any information.</h2>
    </div>
    
    <form id='form' action="#" method="post">
    <div className="form-1" id="name" >
      <input type="text" placeholder="Name*"/>  
    </div>
    <span>Please enter a valid name </span>
    
    <div className="form-2">
      <input className='error' type="text" placeholder="Email*"/>
    </div>
    <span>Please enter a valid name </span>
    <div className="form-3">
      <input type="text" placeholder="Your Message*"/>
    </div>
    <span>Please enter a valid name </span>
    

    <div className="btn">
      <a className="btn-send-message" id="login" type='submit'>Send Message<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
    </form>
  </div>
</section>
  )
}

export default ContactBigform