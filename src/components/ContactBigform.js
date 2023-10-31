import React, { useState } from 'react'







const ContactBigform = () => {
  
  const initialValues = { name: '', email: '', message: ''} //Det som står i input fältet innan användaren börjar skriva in sin information
  const [formValues, setFormValues] = useState({initialValues}); //Lägger in initialValues här för det är den standarden vi vill börja ifrån dvs det ska vara tomt

  const handleChange = (e) => {


  }



  return (
    <section className="big-form">
  <div className="container">
    <div className="title">
      <h2>Leave us a message<br/>for any information.</h2>
    </div>
    
    <form id='form' action="#" method="post">
    <div className="form-1" id="name" >
      <input 
      type="text" 
      placeholder="Name*"
      onChange={handleChange}/>
        
    </div>
    
    
    <div className="form-2">
      <input className='error' 
      type="text" 
      placeholder="Email*"/>
    </div>
    
    
    <div className="form-3">
      <input 
      type="text" 
      placeholder="Your Message*"/>
    </div>
   
    

    <div className="btn">
      <a className="btn-send-message" id="login" type='submit'>Send Message<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
    </form>
  </div>
</section>
  )
}

export default ContactBigform