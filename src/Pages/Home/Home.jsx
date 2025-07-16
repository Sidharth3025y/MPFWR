import React from 'react'
import HeroBanner from '../../component/HeroBanner/HeroBanner'
import About from '../About'
import Skills from '../Skills'
import Projects from '../Projects'

const Home = () => {
  return (
    <div>
        <HeroBanner/>
        <About/>
        <Skills/>
        <Projects/>
    </div>
  )
}

export default Home