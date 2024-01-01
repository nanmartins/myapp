import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <section className='home-container'>
      <h1 className='home-title'><span className='home-title-highlight'>&#60;Renan</span></h1>
      <h1 className='home-title'>Martins/&#62;</h1>
      <p className='home-subtitle'>
        Frontend Developer
        <span className='home-subtitle-highlight'> | </span>
        React
        <span className='home-subtitle-highlight'> | </span>
        Vue
        <span className='home-subtitle-highlight'> | </span>
        JavaScript
      </p>
    </section>
  )
}

export default Home
