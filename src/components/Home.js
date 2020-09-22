import React from 'react'
import About from './About'
import '../styles/home.css'
import Intro from './Intro'
import Experience from './Experience'
import Skills from './Skills'
import Work from './Work'

const Home=()=>{
    return(
        <div>
      <About/>
      <Intro />
      <Experience/>
      <Skills />
      <Work/>
      
           
        </div>
    )
}

export default Home;