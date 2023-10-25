import React from 'react'

const ContactBigform = () => {
  return (
    <section className="big-form">
  <div className="container">
    <div className="title">
      <h2>Leave us a message<br/>for any information.</h2>
    </div>
    <form className="form-1" id="name" action="#" method="post">
      <label for="name"></label>
      <input type="text" placeholder="Name*"/>
    </form>
    <form className="form-2" action="#" method="post">
      <label for="email-2"></label>
      <input type="text" placeholder="Email*"/>
    </form>
    <form className="form-3" action="#" method="post">
      <label for="message"></label>
      <input type="text" placeholder="Your Message*"/>
    </form>
    <div className="btn">
      <a className="btn-send-message" id="login" href="login.html">Send Message<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
  </div>
</section>
  )
}

export default ContactBigform