import React from 'react'
import Hero from '../components/Home.jsx/Hero'
import Impact from '../components/Home.jsx/Impact'
import Partners from '../components/Home.jsx/Partners'
import Current from '../components/Home.jsx/Current'
import Banner from '../components/Banner'

function Home() {
  return (
    <div data-aos="fade-up">
        <Hero />
        <Impact />
        <Partners />
        <Current />
      
    </div>
  )
}

export default Home