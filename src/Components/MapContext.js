import React, {Component} from 'react'
let MapContext = React.createContext('')

class MapProvider extends Component {
  state = {currentMap: 'Ankara', waitingSchoolCount: 0}

  setMap = (currentMap) => {
    this.setState({
      currentMap: currentMap,
      waitingSchoolCount: Math.floor(Math.random() * 10)
    })
  }
  render() {
    const {children} = this.props
    const {currentMap, waitingSchoolCount} = this.state
    const {setMap} = this

    return (
      <MapContext.Provider value={{currentMap, setMap, waitingSchoolCount}}>
        {children}
      </MapContext.Provider>
    )
  }
}

export default MapContext
export {MapProvider}
