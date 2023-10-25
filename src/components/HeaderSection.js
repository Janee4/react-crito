import React from 'react'
import NavSectionContainer from './NavSectionContainer'
import ShowcaseSection from './ShowcaseSection'
import FeaturesSection from './FeaturesSection'
import AboutcompanySection from './AboutcompanySection'
import OurservicesSection from './OurservicesSection'
import WhychooseusSection from './WhychooseusSection'



const Header = () => {
  return (
    <header>

    <NavSectionContainer/>
    <ShowcaseSection />
    <FeaturesSection/>
    <AboutcompanySection/>
    <OurservicesSection/>
    <WhychooseusSection/>
    

    </header>
  )
}

export default Header
