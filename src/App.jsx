import { useState } from 'react'
import Main from './Components/Main'
import Navbar from './Components/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleMode}/>
      <Main darkMode={darkMode}/>
    </div>
  )
}

export default App
