import React from 'react'
import Hero from '../components/Home.jsx/Hero'
import Impact from '../components/Home.jsx/Impact'
import Partners from '../components/Home.jsx/Partners'
import Current from '../components/Home.jsx/Current'

function Home() {
  return (
    <div>
        <Hero />
        <Impact />
        <Partners />
        <Current />
    </div>
  )
}

export default Home