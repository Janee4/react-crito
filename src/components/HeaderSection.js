import React from 'react'
import NavSectionContainer from './NavSectionContainer'
import ShowcaseSection from './ShowcaseSection'
import FeaturesSection from './FeaturesSection'
import AboutCompany from './AboutCompany'


const Header = () => {
  return (
    <header>

    <NavSectionContainer/>
    <ShowcaseSection />
    <FeaturesSection/>
    <AboutCompany/>

    </header>
  )
}

export default Header
