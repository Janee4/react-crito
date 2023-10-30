import React from 'react'

const BlacknavigationNews = ({divName, title, titleClass}) => {
  return (
    <div className={divName}>
      <h4 className={titleClass}>{title}</h4>
      <a href="about.html">{title}</a>
      <a href="features.html">{title}</a>
      <a href="works.html">{title}</a>
      <a href="career.html">{title}</a>
    </div>
  )
}

export default BlacknavigationNews