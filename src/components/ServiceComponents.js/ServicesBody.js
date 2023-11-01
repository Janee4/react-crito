import React from 'react'
import InfoParagraph from './InfoParagraph'
import kimberlyHansenBigPic from '../../assets/images/Kimberly-Hansen-Big-Pic.png'
import quoteSign from '../../assets/images/quote-sign.svg'

const ServicesBody = () => {
  return (
   <div className="news-and-articles">
    <div className="container">
      <div className="left">
        <h3>How To Use Digitalization <br/>In The Classroom</h3>
        <div className="under-title-div">
          <InfoParagraph description="Mar 25, 2023" showYellowCircle={true}/>
          <InfoParagraph description="Business"showYellowCircle={true} />
          <InfoParagraph description="Kimberly Hansen" showYellowCircle={false}/>
        </div>
        <img src={kimberlyHansenBigPic}/>
        <div className="paragraph-div">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, <br/> magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          </p>
          <p>
            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. <br/>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra<br/> nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse<br/> dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. <br/> Ut nonummy.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,<br/> magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc <br/> viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et <br/> malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
          </p>
          <p>
            Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.<br/>
            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem <br/>venenatis eleifend. Ut nonummy.
          </p>
        </div>
        
        <div className="special-paragraph">
        <img src={quoteSign} />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas <br/>porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,<br/> purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          </p>
        </div>

        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        </p>
      

      </div>
      

    </div>


   </div>
  )
}

export default ServicesBody