import React from 'react'
import './Contact.css'
import SvgContactBust from '../../components/SvgContactBust/SvgContactBust'
import SocialMediaLinks from '../../components/SocialMediaLinks/SocialMediaLinks'
import EmailLinkWithIcon from '../../components/EmailLinkWithIcon/EmailLinkWithIcon'


const Contact = () => {
  return (
    <div className='contact-container'>

      <div className='contact-title-container'>
        <h1 className='contact-title title-top'>get in</h1>
        <h1 className='contact-title'>Contact</h1>

        <div className='contact-subtitle'>by
          <span className='contact-subtitle-highlight'>social media:</span>
          <SocialMediaLinks />
        </div>

        <p className='contact-subtitle-email'>or</p>

        <div className='contact-subtitle-email'>by
          <span className='contact-subtitle-highlight'>email:</span>
          <EmailLinkWithIcon />
        </div>
      </div>

      <div className='contact-svg-container'>
        <SvgContactBust />
      </div>
    </div>
  )
}

export default Contact
