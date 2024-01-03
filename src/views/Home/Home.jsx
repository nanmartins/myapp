import React from 'react'
import './Home.css'
const SvgHomeBust = React.lazy(() => import('../../components/SvgHomeBust/SvgHomeBust'))

const Home = () => {
  return (
    <section className='home-container'>

      <div className='home-title-container'>
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
      </div>

      <div className='home-svg-container'>
        <SvgHomeBust />
      </div>
    </section>
  )
}

export default Home
