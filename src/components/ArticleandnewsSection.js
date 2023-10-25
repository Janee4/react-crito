import React from 'react'

import articleAndNews1 from '../assets/images/articles-and-news-1.png'
import articleAndNews2 from '../assets/images/articles-and-news-2.png'
import articleAndNews3 from '../assets/images/articles-and-news-3.png'
import yellowRectangle from '../assets/images/yellow-rectangle.svg'


const ArticleandnewsSection = () => {
  return (
    <section className="article-and-news-9">
  <div className="container">
    <div className="title-container">
      <div className="section-title">
        <p>Article & News</p>
        <h2>Get Every Single Articles & News</h2>
      </div>
      <div className="btn-class">
      <a class="btn-transparent" href="login.html">Browse Articles<i class="fa-regular fa-arrow-up-right"></i></a>
      </div>
    </div>
    <div className="how-to-section">
      <div className="text-under-img">
        <a href="how-to.html"><img src={articleAndNews1} alt="a picture of a woman smiling"/></a>
        <p id="business">Business</p>
        <h4>How To Use Digitalization In The Classroom</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
      </div>
      <div className="yellow-rectangle-3">
        <img src={yellowRectangle}alt=""/>
        <p className="mars-13"><span className="day">13</span><br/>Mar</p>
      </div>
      <div className="text-under-img">
        <a href="how-to.html"><img src={articleAndNews2} alt="a picture of three columns with text inside"/></a>
        <p id="business">Business</p>
        <h4>How To Implement Chat GPT In Your Projects</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
      </div>
      <div className="yellow-rectangle-2">
        <img src={yellowRectangle} alt=""/>
        <p className="mars-17"><span className="day">17</span><br/>Mar</p>
      </div>
      <div className="text-under-img">
        <a href="how-to.html"><img src={articleAndNews3} alt="a picture of a phone lying on top of two books on a table"/></a>
        <p id="business">Business</p>
        <h4>The Guide To Support Modern CSS Design</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
      </div>
      <div className= "yellow-rectangle-1">
        <img src={yellowRectangle} alt=""/>
        <p className="mars-25">25<br/>Mar</p>
      </div>
    </div>
    <div className="circles">
      <div className="circle-1"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
    </div>
    </section>
  )
}

export default ArticleandnewsSection