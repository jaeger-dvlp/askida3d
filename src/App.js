import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/* COMPONENTS */
import Header from './Components/Header'

AOS.init()

function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  )
}

export default App
