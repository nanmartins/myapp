import React from 'react'
// import Carousel from 'react-multi-carousel'
// import 'react-multi-carousel/lib/styles.css'
import logo from '../../assets/logo.png'
import './Footer.css'
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks'

const Footer = () => {

  // const responsive = {
  //   largeDesktop: {
  //     breakpoint: {
  //       max: 3840,
  //       min: 2560
  //     },
  //     items: 1,
  //     partialVisibilityGutter: 20
  //   },
  //   desktop: {
  //     breakpoint: {
  //       max: 2560,
  //       min: 1920
  //     },
  //     items: 1,
  //     partialVisibilityGutter: 20
  //   },
  //   laptop: {
  //     breakpoint: {
  //       max: 1920,
  //       min: 1024
  //     },
  //     items: 1,
  //     partialVisibilityGutter: 20
  //   },
  //   tablet: {
  //     breakpoint: {
  //       max: 1024,
  //       min: 464
  //     },
  //     items: 1,
  //     partialVisibilityGutter: 0
  //   },
  //   mobile: {
  //     breakpoint: {
  //       max: 464,
  //       min: 1
  //     },
  //     items: 1,
  //     partialVisibilityGutter: 20
  //   },
  // }

  return (
    <>
      <section className='footer'>

        <div className='footer-slide'>
          <img className='footer-logo' src={logo} alt=""/>
          nanmartins &copy; 2024
        </div>

        <SocialMediaLinks />
      </section>
    </>
    // <Carousel
    //   additionalTransfrom={0}
    //   arrows={false}
    //   autoPlay
    //   autoPlaySpeed={1}
    //   centerMode={false}
    //   className="footer"
    //   containerClass="container-with-dots"
    //   customTransition="all 5s linear"
    //   dotListClass=""
    //   draggable={false}
    //   focusOnSelect={false}
    //   infinite
    //   itemClass=""
    //   keyBoardControl
    //   minimumTouchDrag={80}
    //   pauseOnHover
    //   renderArrowsWhenDisabled={false}
    //   renderButtonGroupOutside={false}
    //   renderDotsOutside={false}
    //   responsive={responsive}
    //   rewind={false}
    //   rewindWithAnimation={false}
    //   rtl={false}
    //   shouldResetAutoplay
    //   showDots={false}
    //   sliderClass=""
    //   slidesToSlide={1}
    //   swipeable
    //   transitionDuration={5000}
    // >
  )
}

export default Footer
