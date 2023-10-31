import React, { useState } from 'react'







const ContactBigform = () => {

  const handleSubmit = (e) => {
      e.preventDefault()   //När vi trycker på "skicka meddelande" i vår knapp, så säger vi med e.preventDefault att "vänta, skicka ingenting än"
  }
  
    
    // const initialValues = { name: '', email: '', message: ''} //Det som står i input fältet innan användaren börjar skriva in sin information
    const [name, setName] = useState({''}); //Lägger in initialValues här för det är den standarden vi vill börja ifrån dvs det ska vara tomt
    const [email, setEmail] = useState({''});
  const [message, setMessage] = useState({''});
//   // const handleChange = (e) => { //När användaren interagerar med input fältet på formuläret så körs denna funktionen och därav står "e" för själva händelsen när användaren börjar skriva.

// setFormValues (e.target.value)
//       }
    


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
    name="name"
    placeholder="Name*"
    onChange={}
    value= {name} {/*Vi binder ihop input fältet med vår useState, så det som skrivs in här kopplas direkt till useState (state variabeln formValues) som kan manipuleras 
  av setFormValues därefter */}
    onChange={} 
    /> 
  </div>
  
  
  <div className="form-2">
    <input className='error' 
    type="email" 
    name="email"
    placeholder="Email*"
    value= {email}
    onChange= { (e) => setEmail(e.target.value)} 
    />
  </div>
  
  
  <div className="form-3">
    <input 
    type="text"
    name="message" 
    placeholder="Your Message*"
    value= {message} 
    onChange={} 
    />
  </div>
 
  

  <div className="btn">
    <a className="btn-send-message" id="login" type='submit' onClick={handleSubmit}>Send Message<i className="fa-regular fa-arrow-up-right"></i></a>
  </div>
  </form>
</div>
</section>
)
}

export default ContactBigform