import './App.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './router/routes'
import Menu from './components/Menu'
import Header from './components/Header'
function App() {
  

  return (
    <>
     
     
      <Header />
       <Menu />
      <AppRoutes />
     
    </>
  )
}

export default App
