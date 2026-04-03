// import { useState } from 'react'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { copy_intro } from './data/copy_intro.js'

function App() {
  return (
    <div className="bg-dot-pattern min-h-screen">
      <div className="max-w-6xl m-auto">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
