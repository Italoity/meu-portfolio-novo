import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Competence from './components/Competence'
import Projects from './components/Projects'

function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Competence></Competence>
      <Projects></Projects>
    </div>
    
  )
}

export default App
