import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Basic01 from './components/Basic01'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Basic01 />
  )
}

export default App
