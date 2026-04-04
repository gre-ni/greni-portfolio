import { useState } from 'react'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'

function App() {

  const colors = ['#AED318']
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
      </div>
    </div>
  )
}

export default App
