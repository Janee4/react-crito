import React from 'react'


import articleImg1 from '../assets/images/article-img1.png'
import articleImg2 from '../assets/images/article-img2.png'
import articleImg3 from '../assets/images/article-img3.png'
import articleImg4 from '../assets/images/article-img4.png'

const ProjectandcaseSection = () => {
  return (
    <section className="project-and-case-6">
  <div className="container">
    <div className="section-title">
      <p>Project & Case Studies</p>
      <h2>Let's Looks Our Global Projects</h2>
    </div>
    <div className="project-and-cases">
      <article>
        <a href="art.html"><img src={articleImg1} alt="A mans hand reading a business paper" /></a>
        <h3>Grow your business</h3>
        <a className="read-more" href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
      </article>
      <article>
        <a href="art.html"><img src={articleImg2} alt="Pink apple products" /></a>
        <h3>Why your client needs a responsive website</h3>
        <a className="read-more" href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
      </article>
      <article>
        <a href="art.html"><img src={articleImg3} alt="Desk with office supplies"/></a> 
        <h3>Educate your employees to get better results</h3>
        <a className="read-more" href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
      </article>
      <article>
        <a href="art.html"><img src={articleImg4} alt="Laptop with business Intelligence Insights"/></a>
        <h3>Business Insights is a important piece of your business</h3>
        <a className="read-more" href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
      </article>
    </div>
    <div className="all-recent-projects-div">
      <a className="btn-black" href="projects.html">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
  </div>
</section>
  )
}

export default ProjectandcaseSection