import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'

function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
      <div>
          <Navbar/>
          <LandingPage/>
          <Footer/>
      </div>
  )
}


export default App
