import React from 'react'
import './Contact.css'
import SvgContactBust from '../../components/SvgContactBust/SvgContactBust'
import SocialMediaLinks from '../../components/SocialMediaLinks/SocialMediaLinks'
import EmailLinkWithIcon from '../../components/EmailLinkWithIcon/EmailLinkWithIcon'
import CV from '../../assets/CV-04-01-24.pdf'
import DownloadSvg from '../../assets/svg/DownloadSvg'
import ArrowDownSvg from '../../assets/svg/ArrowDownSvg'


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

        {/* <div className='contact-subtitle'>
          <span  className='contact-subtitle-highlight'>social:</span>
          <SocialMediaLinks />
        </div> */}

        {/* <div className='divider'></div> */}

        <div className='contact-subtitle-email'>
          <span  className='contact-subtitle-highlight'>email:</span>
          <EmailLinkWithIcon />
        </div>

        <div className='divider'></div>

        <div className='contact-cv-container'>
          <span className='contact-subtitle-highlight'>Curriculum:</span>
          <div className='contact-cv-download'>
            <DownloadSvg />
            <button onClick={handleDownload}>download</button>
          </div>
        </div>

        <div className='divider'></div>

      </div>

      <div className='contact-svg-container'>
        <SvgContactBust />
      </div>


      <div className='contact-social-container'>
        <p className='contact-social'>Social Medias:</p>
        <ArrowDownSvg />
      </div>

    </div>
  )
}

export default Contact
