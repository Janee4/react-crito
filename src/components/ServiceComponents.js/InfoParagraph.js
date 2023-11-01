import React from 'react'

const InfoParagraph = ({description}) => {
  return (
    <div className="paragraph-under-title">
      <div className="yellow-circle"></div>
      <p>{description}</p>
    </div>
  )
}

export default InfoParagraph