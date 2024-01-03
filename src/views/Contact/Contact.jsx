import React from 'react'
import './Contact.css'
import SvgContactBust from '../../components/SvgContactBust/SvgContactBust'

const Contact = () => {
  return (
    <div className='contact-container'>

      <div className='contact-title-container'>
        <h1 className='contact-title'>Contact</h1>
        <p className='contact-subtitle'>&#60;Get in touch by social medias /&#62;</p>
      </div>

      <div className='contact-svg-container'>
        {/* <SvgContactBust /> */}
      </div>
    </div>
  )
}

export default Contact
