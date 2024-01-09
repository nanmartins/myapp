import React from 'react'
import './Projects.css'
import SvgProjectsBrain from '../../assets/svg/SvgProjectsBrain'

const Projects = () => {


  // const [isAnimating, setIsAnimating] = React.useState(false);

  // React.useEffect(() => {
  //   const moveToSelected = (element) => {
  //     if (isAnimating) return;

  //     setIsAnimating(true);

  //     let selected, next, prev, prevSecond, nextSecond;

  //     if (element === 'next') {
  //       selected = document.querySelector('.selected').nextElementSibling;
  //     } else if (element === 'prev') {
  //       selected = document.querySelector('.selected').previousElementSibling;
  //     } else {
  //       selected = element;
  //     }

  //     next = selected ? selected.nextElementSibling : null;
  //     prev = selected ? selected.previousElementSibling : null;
  //     prevSecond = prev ? prev.previousElementSibling : null;
  //     nextSecond = next ? next.nextElementSibling : null;

  //     const onAnimationEnd = () => {
  //       setIsAnimating(false);
  //     };

  //     const elements = [selected, prev, next, nextSecond, prevSecond];

  //     elements.forEach((el) => {
  //       if (el) {
  //         el.classList.remove(...el.classList);
  //         el.addEventListener('transitionend', onAnimationEnd, { once: true });
  //       }
  //     });

  //     if (selected) {
  //       selected.classList.add('selected');
  //     }

  //     if (prev) {
  //       prev.classList.add('prev');
  //     }

  //     if (next) {
  //       next.classList.add('next');
  //     }

  //     if (nextSecond) {
  //       nextSecond.classList.add('nextRightSecond');
  //       nextSecond.nextElementSiblings?.forEach((el) => el.classList.add('hideRight'));
  //     }

  //     if (prevSecond) {
  //       prevSecond.classList.add('prevLeftSecond');
  //       prevSecond.previousElementSiblings?.forEach((el) => el.classList.add('hideLeft'));
  //     }
  //   };

  //   // Eventos de teclado
  //   const handleKeyDown = (e) => {
  //     switch (e.which) {
  //       case 37: // left
  //         moveToSelected('prev');
  //         break;
  //       case 39: // right
  //         moveToSelected('next');
  //         break;
  //       default:
  //         return;
  //     }
  //     e.preventDefault();
  //   };

  //   const prevButton = document.getElementById('prev');
  //   if (prevButton) {
  //     prevButton.addEventListener('click', () => moveToSelected('prev'));
  //   }

  //   const nextButton = document.getElementById('next');
  //   if (nextButton) {
  //     nextButton.addEventListener('click', () => moveToSelected('next'));
  //   }

  //   document.addEventListener('keydown', handleKeyDown);

  //   // Limpeza do listener de evento ao desmontar o componente
  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown);
  //     if (prevButton) {
  //       prevButton.removeEventListener('click', () => moveToSelected('prev'));
  //     }
  //     if (nextButton) {
  //       nextButton.removeEventListener('click', () => moveToSelected('next'));
  //     }
  //   };
  // }, [isAnimating]);


  React.useEffect(() => {
    const moveToSelected = (element) => {
      let selected, next, prev, prevSecond, nextSecond;

      if (element === 'next') {
        selected = document.querySelector('.selected').nextElementSibling;
      } else if (element === 'prev') {
        selected = document.querySelector('.selected').previousElementSibling;
      } else {
        selected = element;
      }

      next = selected.nextElementSibling;
      prev = selected.previousElementSibling;
      prevSecond = prev ? prev.previousElementSibling : null;
      nextSecond = next ? next.nextElementSibling : null;

      // Adicione ou remova as classes conforme necessário
      if (selected) {
        selected.classList.remove(...selected.classList);
        selected.classList.add('selected');
      }

      if (prev) {
        prev.classList.remove(...prev.classList);
        prev.classList.add('prev');
      }

      if (next) {
        next.classList.remove(...next.classList);
        next.classList.add('next');
      }

      if (nextSecond) {
        nextSecond.classList.remove(...nextSecond.classList);
        nextSecond.classList.add('nextRightSecond');
        nextSecond.nextElementSiblings?.forEach((el) => el.classList.add('hideRight'));
      }

      if (prevSecond) {
        prevSecond.classList.remove(...prevSecond.classList);
        prevSecond.classList.add('prevLeftSecond');
        prevSecond.previousElementSiblings?.forEach((el) => el.classList.add('hideLeft'));
      }
    };

    // Eventos de teclado
    const handleKeyDown = (e) => {
      switch (e.which) {
        case 37: // left
          moveToSelected('prev');
          break;
        case 39: // right
          moveToSelected('next');
          break;
        default:
          return;
      }
      e.preventDefault();
    };

    const prevButton = document.getElementById('prev');
    if (prevButton) {
      prevButton.addEventListener('click', () => moveToSelected('prev'));
    }

    const nextButton = document.getElementById('next');
    if (nextButton) {
      nextButton.addEventListener('click', () => moveToSelected('next'));
    };

    document.addEventListener('keydown', handleKeyDown);

    // Limpeza do listener de evento ao desmontar o componente
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


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
          <button id="prev">Prev</button>
          <button id="next">Next</button>
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
