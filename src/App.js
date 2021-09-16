import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/* COMPONENTS */
import Header from './Components/Header'
import WelcomeSection from './Components/WelcomeSection'
import Map from './Components/Map'
AOS.init()

function App() {
  return (
    <div className="App">
      <Header></Header>
      <WelcomeSection></WelcomeSection>
      <Map className=""></Map>
    </div>
  )
}

export default App
