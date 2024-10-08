import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GradientText from './components/GradientText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} // Custom gradient colors
        animationSpeed={3} // Custom animation speed in seconds
        showBorder={true} // Show or hide border
        className="custom-class" // Add one or more custom classes
      >
        <h1>Sanket Dhumal</h1>
      </GradientText>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </>
  )
}

export default App
