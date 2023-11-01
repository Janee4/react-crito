import React, { useState } from 'react'

const ContactBigform = () => {
  
  
  const [errorName, setErrorName] = useState ('')
  const [errorEmail, setErrorEmail] = useState ('')
  const [errorMessage, setErrorMessage] = useState('')
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!message) {
      setErrorMessage(
        <p>Please enter a message.</p>
      );
    } else {
      setErrorMessage('');
    }
  
    if (!email) {
      setErrorEmail(
        <p>Please enter an email.</p>
      );
    } else {
      setErrorEmail('');
    }
  
    if (!name) {
      setErrorName(
        <p>Please enter a name.</p>
      );
    } else {
      setErrorName('');
    }
  
    if (name && email && message) {
      // Alla fälten är ifyllda, så skicka förfrågan
      fetch('https://win23-assignment.azurewebsites.net/index.html', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }), //Här omvandlas vårt javascripts objekt till en JSON-sträng 
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (response.status === 200) {
            return response.text();
          } else {
            console.error('Förfrågan misslyckades med statuskod ' + response.status);
          }
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Något gick fel!');
        });
    }
  };
  
    // dessa används för att hålla koll på vad användaren skriver in och sedan uppdatera det till det användaren skrivit in. 
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
    value= {name} //vad användaren skriver in för namn i input fältet
    onChange={ (e) => setName (e.target.value)} //värdet som skrivs in i input fältet sparas inuti setName och skickas till handleSubmit för att valideras
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