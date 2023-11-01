import React from 'react'

const TestimonialBox = ({imgSrc, title, description}) => {
  return (
    <div className="rating-1">
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span> 
    <p>"Lorem ipsum dolor, sit amet<br/> consectetur adipisicing elit. Laudantium<br/>libero, ad dignissimos velit qui, dolorum<br/> obcaecati cum saepe nesciunt nemo<br/> eligendi numquam voluptate"</p>
      <div className="img-name-profession">
        <div className="three-images">
          <img src={imgSrc} alt="a picture of a woman"/>
        </div>
        <div className="name-profession">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
  </div>
    
  )
}

export default TestimonialBox


{/* <div className="rating-1">
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span> 
        <p>"Lorem ipsum dolor, sit amet<br/> consectetur adipisicing elit. Laudantium<br/>libero, ad dignissimos velit qui, dolorum<br/> obcaecati cum saepe nesciunt nemo<br/> eligendi numquam voluptate"</p>
          <div className="img-name-profession">
            <div className="three-images">
              <img src={cassandraWarren} alt="a picture of a woman"/>
            </div>
            <div className="name-profession">
              <h4>Cassandra Warren</h4>
              <p>Business Manager, Dorfus</p>
            </div>
          </div>
      </div>
      <div className="rating-1">
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <p>"Lorem ipsum dolor, sit amet<br/> consectetur adipisicing elit. Laudantium<br/>libero, ad dignissimos velit qui, dolorum<br/> obcaecati cum saepe nesciunt nemo<br/> eligendi numquam voluptate"</p>
        <div className="img-name-profession">
          <div className="three-images">
            <img src={amandaTulling} alt="a picture of a woman"/>
          </div>
          <div className="name-profession">
            <h4>Amanda Tulling</h4>
            <p>Senior Developer, Square</p>
          </div>
        </div>
      </div>
      <div className="rating-1">
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <p className="jack-paragraph">"Lorem ipsum dolor, sit amet<br/> consectetur adipisicing elit. Laudantium<br/>libero, ad dignissimos velit qui, dolorum<br/> obcaecati cum saepe nesciunt nemo<br/> eligendi numquam voluptate"</p>
        <div className="img-name-profession">
          <div className="three-images">
            <img src={jackMcdogglas} alt="a picture of a man"/>
          </div>
          <div className="name-profession">
            <h4>Jack McDogglas</h4>
            <p>Key Account Manager, Gobona</p>
          </div>    
      </div>
    </div> */}