import React, {Component} from 'react'
let MapContext = React.createContext('')

class MapProvider extends Component {
  state = {
    currentMap: 'İstanbul'
  }

  setMap = (currentMap) => {
    this.setState({currentMap: currentMap})
  }
  render() {
    const {children} = this.props
    const {currentMap} = this.state
    const {setMap} = this

    return (
      <MapContext.Provider value={{currentMap, setMap}}>
        {children}
      </MapContext.Provider>
    )
  }
}

export default MapContext
export {MapProvider}
