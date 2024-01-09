import React from 'react'
import LinkedinSvg from '../../assets/svg/LinkedinSvg'
import GithubSvg from '../../assets/svg/GithubSvg'
import InstagramSvg from '../../assets/svg/InstagramSvg'

const SocialMediaLinks = () => {
  return (
    <div className='footer-slide'>
      <a href="/" target="_blank">
        <LinkedinSvg />
        linkedin
      </a>

      <a href="/" target="_blank">
        <GithubSvg />
        github
      </a>

      <a href="/" target="_blank">
        <InstagramSvg />
        instagram
      </a>

    </div>
  )
}

export default SocialMediaLinks
