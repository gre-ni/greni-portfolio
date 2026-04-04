import { useState } from 'react'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Footer } from './sections/Footer'

function App() {

  const colors = ['#AED318', '#EEC643', '#AFD5AA', '#86BBD8']
  // '#FF715B' -> red
  const [colorIndex, setColorIndex] = useState(0)

  const cycleColor = () => {
    const next = (colorIndex + 1) % colors.length
    setColorIndex(next)
    document.documentElement.style.setProperty('--color-highlight', colors[next])
  }


  return (
    <div className="bg-dot-pattern min-h-screen" 
      onClick={cycleColor}
    >
      <div className="max-w-6xl m-auto">
        <Navbar />
        <Hero />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
