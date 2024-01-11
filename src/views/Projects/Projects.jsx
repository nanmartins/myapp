import React from 'react'
import './Projects.css'
import SvgProjectsBrain from '../../assets/svg/SvgProjectsBrain'
import ArrowLeftSvg from '../../assets/svg/ArrowLeftSvg'

const Projects = () => {

  React.useEffect(() => {

    const moveToSelected = (element) => {

      const selected = (
        element === 'next' ? document.querySelector('.selected').nextElementSibling
          :
        element === 'prev' ? document.querySelector('.selected').previousElementSibling
          :
        element
      )

      const prev = selected?.previousElementSibling;
      const next = selected?.nextElementSibling;
      const prevSecond = prev?.previousElementSibling;
      const nextSecond = next?.nextElementSibling;

      const elementsToUpdate = [selected, prev, next, prevSecond, nextSecond];

      elementsToUpdate.forEach((el) => {
        if (el) {
          el.classList.remove(...el.classList);
          console.log(el.classList)
        }
      });

      console.log(elementsToUpdate[3], elementsToUpdate[4])

      elementsToUpdate[0]?.classList.add('selected');
      elementsToUpdate[1]?.classList.add('prev');
      elementsToUpdate[2]?.classList.add('next');
      elementsToUpdate[3]?.classList.add('prevLeftSecond');
      elementsToUpdate[4]?.classList.add('nextRightSecond');


      elementsToUpdate[4]?.nextElementSiblings?.forEach((el) => el.classList.add('hideRight'));
      elementsToUpdate[3]?.previousElementSiblings?.forEach((el) => el.classList.add('hideLeft'));
    };



    const handleKeyDown = (e) => {
      switch (e.which) {
        case 37:
          moveToSelected('prev')
          break
        case 39:
          moveToSelected('next')
          break
        default:
          return
      }
      e.preventDefault()
    }

    const prevButton = document.getElementById('prev')
    if (prevButton) {
      prevButton.addEventListener('click', () => moveToSelected('prev'))
    }

    const nextButton = document.getElementById('next')
    if (nextButton) {
      nextButton.addEventListener('click', () => moveToSelected('next'))
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])


  return (
    <section className='projects-container'>

      <div className='projects-title-container'>
        <h1 className='projects-title'>Projects</h1>
      </div>


      <div className='projects-content-container'>


        {/* ------------------------------- */}

        <div id="carousel">

          <div className="hideLeft">
            <img src="https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg" />
          </div>

          <div className="prevLeftSecond">
            <img src="https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg" />
          </div>

          <div className="prev">
            <img src="https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg" />
          </div>

          <div className="selected">
            <img src="https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg" />
          </div>

          <div className="next">
            <img src="https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg" />
          </div>

          <div className="nextRightSecond">
            <img src="https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg" />
          </div>

          <div className="hideRight">
            <img src="https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg" />
          </div>

        </div>

        <div className="buttons">
          <button id="prev" style={{ background: 'transparent', border: 'none' }}>
            <ArrowLeftSvg />
          </button>

          <button id="next" style={{ background: 'transparent', border: 'none', rotate: '180deg' }}>
            <ArrowLeftSvg />
          </button>
        </div>


         {/* -------------------------------- */}
      </div>


      <div className='projects-svg-container'>
        <SvgProjectsBrain />
      </div>
    </section>
  )
}

export default Projects
