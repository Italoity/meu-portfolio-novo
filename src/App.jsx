import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Competence from './components/Competence'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Competence></Competence>
      <Projects></Projects>
      <Contact></Contact>
    </div>
    
  )
}

export default App
