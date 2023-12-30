import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './Footer.css'

const Footer = () => {

  const responsive = {
    largeDesktop: {
      breakpoint: {
        max: 3840,
        min: 2560
      },
      items: 1,
      partialVisibilityGutter: 20
    },
    desktop: {
      breakpoint: {
        max: 2560,
        min: 1920
      },
      items: 1,
      partialVisibilityGutter: 20
    },
    laptop: {
      breakpoint: {
        max: 1920,
        min: 1024
      },
      items: 1,
      partialVisibilityGutter: 20
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1,
      partialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 1
      },
      items: 1,
      partialVisibilityGutter: 20
    },
  }

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={1}
      centerMode={false}
      className="footer"
      containerClass="container-with-dots"
      customTransition="all 4s linear"
      dotListClass=""
      draggable={false}
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
      transitionDuration={4000}
    >
      <p className='footer-text'>footer / footer / footer / footer / footer / footer / footer...</p>
    </Carousel>
  )
}

export default Footer
