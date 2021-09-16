import React, {Component} from 'react'
import TurkeyMap from './turkeyMap'
export class Map extends Component {
  render() {
    return (
      <div className="container-xl d-flex justify-content-center container-lg">
        <TurkeyMap className="text-center"></TurkeyMap>
      </div>
    )
  }
}

export default Map
