import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/* COMPONENTS */
import Header from './Components/Header'
import WelcomeSection from './Components/WelcomeSection'
import SelectedMap from './Components/SelectedMap'
import Map from './Components/Map'
import PrinterSection from './Components/PrinterSection'
import PrizeSection from './Components/PrizeSection'

import {MapProvider} from './Components/MapContext'
AOS.init()

function App() {
  return (
    <MapProvider value={{currentMap: ''}}>
      <Header></Header>
      <WelcomeSection></WelcomeSection>
      <Map></Map>
      <SelectedMap></SelectedMap>
      <PrinterSection />
      <PrizeSection />
    </MapProvider>
  )
}

export default App
