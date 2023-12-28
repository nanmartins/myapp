import React from 'react'
import BackgroundLight from './components/BackgroundLight'

function App() {

  return (
    <>
      <BackgroundLight />
      <h1>Testando a cor da <span>FONT.</span> e a <span>FONT.</span></h1>
      <h2>Testando <span>FONT.</span></h2>
      <p className='p-caps'>Testando a <span>FONT.</span> para paraGRAFOS!</p>
      <p className='p-lower'>Testando a <span>FONT.</span> para paraGRAFOS!</p>

      <p className='p-test'>Testando o texto de paragrafo, Testando o texto de paragrafo Testando o texto de paragrafo Testando o texto de paragrafo Testando o texto de paragrafo Testando o texto de paragrafo Testando o texto de paragrafo Testando o texto de paragrafo Testando o texto de paragrafo Testando o texto de paragrafo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quibusdam numquam enim, atque incidunt quae mollitia velit quam veritatis aliquam quis tempore ex neque recusandae modi ab. Distinctio, ex soluta.</p>

      <div className='card'></div>
      <button>Destaque</button>
    </>
  )
}

export default App
