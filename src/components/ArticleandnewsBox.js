import React from 'react'

const ArticleandnewsBox = ({imageSrc, title, description, yellowDate}) => {
  return (
    <>
    <div className="text-under-img">
        <a href="how-to.html"><img src={imageSrc} alt="a picture of a woman smiling"/></a>
        <p id="business">Business</p>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="yellow-rectangle-3">
        <img src={yellowRectangle}alt=""/>
        <p className={yellowDate}><span className="day">13</span><br/>Mar</p>
      </div>
    
    
    
    </>
  )
}

export default ArticleandnewsBox