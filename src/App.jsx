import React from 'react'
import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import Projects from './views/Projects/Projects'

function App() {

  const [content, setContent] = React.useState(null)

  let Content = Home

  if (content === 'ABOUT') {
    Content = About
  }
  else if (content === 'CONTACT') {
    Content = Contact
  }
  else if (content === 'PROJECTS') {
    Content = Projects
  }

  return (
    // <>
      <main className='main-container'>
        <Navbar setContentToShow={setContent} />
        <Content />
        <Footer />
      </main>
    // </>
  )
}

export default App
