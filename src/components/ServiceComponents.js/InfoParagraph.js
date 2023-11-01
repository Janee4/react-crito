import React from 'react'

const InfoParagraph = ({description}) => {
  return (
    <div className="paragraph-under-title">
      <p>{description}</p>
      <div className="yellow-circle"></div>
    </div>
  )
}

export default InfoParagraph