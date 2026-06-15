import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Quiz03 from './quiz/quiz03/Quiz03'
// import './App.css'
// import Quiz01 from './quiz/quiz01/Quiz01'
// import Quiz02 from './quiz/quiz02/Quiz02'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Quiz01/>
    // <Quiz02/>
    <Quiz03/>
  )
}

export default App
