import React from 'react'
import NavSectionContainer from './NavSectionContainer'
import ShowcaseSection from './ShowcaseSection'
import FeaturesSection from './FeaturesSection'
import AboutcompanySection from './AboutcompanySection'
import OurservicesSection from './OurservicesSection'



const Header = () => {
  return (
    <header>

    <NavSectionContainer/>
    <ShowcaseSection />
    <FeaturesSection/>
    <AboutcompanySection/>
    <OurservicesSection/>
    

    </header>
  )
}

export default Header
