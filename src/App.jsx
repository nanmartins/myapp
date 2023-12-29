import React from 'react'
import BackgroundLight from './components/BackgroundLights/BackgroundLight'
import Home from './views/Home'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <BackgroundLight />
      <div className='main-container'>
        <Navbar />
        <Home />
        {/* <div> */}
          <p className='footer'>footer / footer / footer ...</p>
        {/* </div> */}
      </div>
    </>
  )
}

export default App
