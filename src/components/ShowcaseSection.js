import React from 'react'

const ShowcaseSection = () => {
  return (
    <section className="showcase"> 
    <div className="container">
        <div className="thin-line-showcase">
        <img src="images/thin-line-showcase.svg" alt="" />
        </div>
        <div className="content">  
        <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
        <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></a>
        <a className="btn-transparent" href="services.html">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
        <img className="man-img" src="images/Showcase.png" alt="showcase image of a man" />
    </div>
    </section>
  )
}

export default ShowcaseSection