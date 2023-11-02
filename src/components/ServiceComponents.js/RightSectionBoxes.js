import React from 'react'


const RightSectionBoxes = ({title, description}) => {
    const createMarkup = (htmlString) => ({
        __html: htmlString
      });
  return (
    <>
    <div className="right-box">
    <h4 dangerouslySetInnerHTML={createMarkup(title)} />
      <p>{description}</p>
      <div className="gray-line"></div>
    </div>
    </>
 
  )
}

export default RightSectionBoxes