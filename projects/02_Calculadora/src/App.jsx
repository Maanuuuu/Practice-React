import './App.css'
import { Botones } from './Botones'

function App() {

  return (
    <>
      <section className='App'>
        <h1 id='Titulo'>Super Calculadora con React </h1>
        <div className='Calculadora'>
          <input id='Entrada' readOnly></input>
        <div className='botones'>
          <Botones number='C' />
          <Botones number='=' />
          <Botones number='/' />
          <Botones number='*' />
          <Botones number='1' />
          <Botones number='2' />
          <Botones number='3' />
          <Botones number='4' />
          <Botones number='5' />
          <Botones number='6' />
          <Botones number='7' />
          <Botones number='8' />
          <Botones number='9' />
          <Botones number='0' />
          <Botones number={'+'} />
          <Botones number={'-'} />
        </div>

        </div>

      </section>

    </>
  )
}

export default App;

    let entrada = document.getElementById('Entrada')

document.querySelectorAll('button').forEach(button => {

  button.addEventListener('click', function () {
    if(this.innerText === 'C') {
      entrada.value = ''
    }

    else if(this.innerText === '=') {

      entrada.value = eval(entrada.value)
      
    }
    else {
      entrada.value += this.innerText
    }
  })
})