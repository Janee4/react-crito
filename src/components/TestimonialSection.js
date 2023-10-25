import React from 'react'

import cassandraWarren from '../assets/images/cassandra-warren-1.svg'
import amandraTulling from '../assets/images/amanda-tulling-2.svg'
import jackMcdogglas from '../assets/images/jack-mcdogglas-3.svg'

const TestimonialSection = () => {
  return (
    <section className="what-our-client-says-8">
  <div className="container">
    <div className="section-title">
      <p>Testimonial</p>
      <h2>What Our Client Says</h2>
    </div>
    <div className="total-comments">
      <div className="rating-1">
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
            <img src={amandraTulling} alt="a picture of a woman"/>
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
    </div>
  </div>
    <div className="all-recent-projects-div">
      <a className="btn-black" href="projects.html">All Reviews<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
  </div>
</section>
  )
}

export default TestimonialSection