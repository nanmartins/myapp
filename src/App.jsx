import React from 'react'
import BackgroundLight from './components/BackgroundLights/BackgroundLight'
import Home from './views/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <BackgroundLight />
      <div className='main-container'>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
