import './App.css'
import FormularioLogin from './components/FormularioLogin'
import ListaDeCompras from './components/ListaDeCompras'
import LocalStorage from './components/LocalStorage'

function App() {

  return (
    <>
      <div>
        <h1>Exercício 01</h1>
        <FormularioLogin />
      </div>
      <hr />
      <div>
        <h1>Exercício 02</h1>
        <ListaDeCompras />
      </div>
      <div>
        <h1>Exercício 03</h1>
        <LocalStorage />
      </div>
    </>
  )
}

export default App
