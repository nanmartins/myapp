import React from 'react'
import './EmailLinkWithIcon.css'
import EmailSvg from '../../assets/svg/EmailSvg'

const EmailLinkWithIcon = () => {
  return (
    <div className='contact-by-email-container'>
      <a className='contact-by-email' href="mailto:renanmartins989@gmail.com">
        <EmailSvg />
        email
      </a>
    </div>
  )
}

export default EmailLinkWithIcon
