import React from 'react'
import './Contact.css'
import SvgContactBust from '../../components/SvgContactBust/SvgContactBust'
import SocialMediaLinks from '../../components/SocialMediaLinks/SocialMediaLinks'
import EmailLinkWithIcon from '../../components/EmailLinkWithIcon/EmailLinkWithIcon'
import CV from '../../assets/CV-04-01-24.pdf'


const Contact = () => {

  const handleDownload = async () => {
    const response = await fetch(CV);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'RenanMartins-CV.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='contact-container'>

      <div className='contact-title-container'>
        <h1 className='contact-title title-top'>get in</h1>
        <h1 className='contact-title'>Contact</h1>

        <div className='contact-subtitle'>
          <span  className='contact-subtitle-highlight'>social:</span>
          <SocialMediaLinks />
        </div>

        <div className='divider'></div>

        <div className='contact-subtitle-email'>
          <span  className='contact-subtitle-highlight'>email:</span>
          <EmailLinkWithIcon />
        </div>

        <div className='divider'></div>

        <div className='contact-cv-container'>
          <span className='contact-subtitle-highlight'>Curriculum:</span>
          <div className='contact-cv-download'>
            <svg xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M11.29,16.71h0a1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21h0l4-4a1,1,0,0,0-1.42-1.42L13,13.59V3a1,1,0,0,0-2,0V13.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"></path><path d="M19,20H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"></path></g></svg>
            <button onClick={handleDownload}>download</button>
          </div>
        </div>

        <div className='divider'></div>

      </div>

      <div className='contact-svg-container'>
        <SvgContactBust />
      </div>

    </div>
  )
}

export default Contact
