import React from 'react'
import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  let Content = Home

  return (
    <>
      <main className='main-container'>
        <Navbar/>
        {/* <Home /> */}
        <Content />
        <Footer />
      </main>
    </>
  )
}

export default App
