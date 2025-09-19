import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hi from './components/Hi'
import Hello from './components/Hello/Hello'
import Primeur from './components/Primeur'

function App() {


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Hi nom="Wick">Aix</Hi>
      <Hello nom='Dalton'> Marseille</Hello>
      <Primeur/>

     
    </>
  )
}

export default App
