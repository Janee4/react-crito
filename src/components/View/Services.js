import React from 'react';
import HeaderSection from '../HeaderSection';
import FooterSection from '../FooterSection';
import BlacknavigationSection from '../BlacknavigationSection';
import ServicesBody from '../ServiceComponents.js/ServicesBody';





const Services = () => {
  
  return (
    <div>
      <HeaderSection />
      <ServicesBody />
      <BlacknavigationSection />
      <FooterSection/>
    </div>
  )
}

export default Services