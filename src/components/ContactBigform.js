import React, { useState } from 'react'







const ContactBigform = () => {
  
  
  const [errorName, setErrorName] = useState ('')
  const [errorEmail, setErrorEmail] = useState ('')
  const [errorMessage, setErrorMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()   //När vi trycker på "skicka meddelande" i vår knapp, så säger vi med e.preventDefault att "vänta, skicka ingenting än" vi ska först ta och gå igenom vad som skrivits in


    if (!message) {
      setErrorMessage (<p>
        Formuläret får inte vara tomt, var god skriv in ett meddelande.
        </p>)
    } else {
      setErrorMessage('')
    }

    if (!email) {
      setErrorEmail (<p>
        Formuläret får inte vara tomt, var god skriv in en email-adress.
        </p>) 
    } else {
      setErrorEmail('')
        }

      
        if (!name) {
          setErrorName (<p>
            Formuläret får inte vara tomt, var god skriv in en email-adress.
            </p>) 
        } else {
          setErrorName('')
            }

  }
  
    
    // const initialValues = { name: '', email: '', message: ''} //Det som står i input fältet innan användaren börjar skriva in sin information
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  


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
    value= {name}
    onChange={ (e) => setName (e.target.value)} //värdet som skrivs in i input fältet sparas inuti setName
    /> 
  </div>
  <span>{errorName}</span>
  
  <div className="form-2">
    <input className='error' 
    type="email" 
    name="email"
    placeholder="Email*"
    value= {email}
    onChange= { (e) => setEmail(e.target.value)} 
    />
  </div>
  <span>{errorEmail}</span>
  
  <div className="form-3">
    <input 
    type="text"
    name="message" 
    placeholder="Your Message*"
    value= {message} 
    onChange={ (e) => setMessage(e.target.value)} 
    />
  </div>
  <span>{errorMessage}</span>
 

  <div className="btn">
    <a className="btn-send-message" id="login" type='submit' onClick={handleSubmit}>Send Message<i className="fa-regular fa-arrow-up-right"></i></a>
  </div>
  </form>
</div>
</section>
)
}

export default ContactBigform