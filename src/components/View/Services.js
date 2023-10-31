import React from 'react';
import {useState} from 'react';





const Services = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick= {() => setCount (count - 1)}>Minska</button>
      <button onClick={() => setCount (count + 1)}>Öka</button>


    </div>
  )
}

export default Services