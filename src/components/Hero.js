import React from 'react'
import logo from '../logo1.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='heroText'>
            <h1>Full-Stack Developer</h1>
            <p>Full Stack Engineer with +5 years of experience in delivering innovative and visually stunning Frontend solutions.</p>
            <button>Download CV</button>
        </div>
        <div className='heroImg'>
            <div className='ball3'></div>
            <div className='ball6'></div>
            <div className='ball5'></div>
            <div className='ball4'></div>
            <img src={logo}></img>
        </div>
    </div>  )
}

export default Hero