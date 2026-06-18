import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router'
import Home from './pages/Home'
import Info from './pages/Info'
import MyPage from './pages/MyPage'
import Cart from './pages/Cart'

function App() {
  const [ count, setCount ] = useState(0)

  let navigate = useNavigate();

  return (
    <>
      <div className="Nav">
        <button onClick={()=>{navigate('/')}}>Main</button>
        <button onClick={()=>{navigate('/info')}}>/info</button>
        <button onClick={()=>{navigate('/mypage')}}>/mypage</button>
        <button onClick={()=>{navigate('/cart')}}>/cart</button>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
