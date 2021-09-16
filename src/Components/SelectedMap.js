import React, {Component} from 'react'
import MapContext from './MapContext'

export class SelectedMap extends Component {
  static contextType = MapContext

  constructor(props) {
    super(props)
    this.state = {theMap: ''}
  }

  componentDidMount() {}

  render() {
    const {currentMap} = this.context
    return (
      <div className="container p-3">
        <div className="col-12 selectedMap-cont p-0 m-0 d-flex row">
          <div className="col-12 selected-map">
            {currentMap} Bekleme Listesi
          </div>
        </div>
      </div>
    )
  }
}

export default SelectedMap
