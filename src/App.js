import React from 'react'

import './style.css'

import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'
import Contact from './components/Contact.js'
import Gold from './components/Gold'
import Gold2 from './components/Gold2'

const App = () => {

  // let top = document.querySelector(".top")

  // window.onscroll = ()=>{
  //   if (this.scrollY >= 500){
  //     top.style.display = "block"   
  //   }else{
  //     top.style.display = "none"
  //   }
  // }

  // top.addEventListener("click", () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   });
  // })  
  
  return (
    <div>
      <div className='scroller'></div>
      <button className='top'>
        Top
      </button>
      <Header />
      <Gold />
      <Hero />
      <Gold2 />
      <Skills />
      <Gold />
      <Projects />
      <Gold2 />
      <Contact />
      <Gold />
      <Footer />
    </div>
  )
}

export default App