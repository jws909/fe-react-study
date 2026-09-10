import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AppRS from './pages/AppRS'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <AppRS/> */}
      <Login/>
    </>
  )
}

export default App
