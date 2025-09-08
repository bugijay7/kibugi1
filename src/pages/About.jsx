import React from 'react'
import AboutHero from '../components/About/AboutHero'
import Impact from '../components/Home.jsx/Impact'
import AboutFeature from '../components/About/AboutFeature'
import AboutCarousel from '../components/About/AboutCarousel'
import AboutClients from '../components/About/AboutClients'

function About() {
  return (
    <div>
      <AboutHero />
      <Impact />
      <AboutFeature />
      <AboutCarousel />
      <AboutClients />
    </div>
  )
}

export default About