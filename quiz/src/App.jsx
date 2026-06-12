import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import Quiz01 from './quiz/quiz01/Quiz01'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Quiz01/>
  )
}

export default App
