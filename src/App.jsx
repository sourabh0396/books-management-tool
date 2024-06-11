import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navebar from './components/Navebar'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navebar/>
    {/* <Header/> */}
    <Outlet/>
    {/* <div>Hello Books</div> */}
    </>
  )
}

export default App
