import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import Basic01 from './components/Basic01'
// import State01 from './components/State01'
// import Export01 from './components/Export01'
import State02 from './components/State02'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Basic01/>
    // <State01/>
    // <Export01/>
    <State02/>
  )
}

export default App
