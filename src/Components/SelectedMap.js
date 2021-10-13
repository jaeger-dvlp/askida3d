import React, {Component} from 'react'
import MapContext from './MapContext'

export class SelectedMap extends Component {
  static contextType = MapContext

  constructor(props) {
    super(props)

    this.writeAllSchools()
  }

  componentDidMount() {}

  writeAllSchools() {}

  render() {
    const {/*waitingSchoolCount, */ currentMap} = this.context
    //{waitingSchoolCount}
    return (
      <div
        data-aos="fade-in"
        data-aos-delay="300"
        className="container-lg container-xl pt-5 p-xl-3 p-lg-3 p-1"
      >
        <div className="col-12 selectedMap-cont p-0 m-0 d-flex row">
          <div className="col-12 selected-map pb-1">
            <h1 className>
              <span>{currentMap} bekleme listesi</span>
            </h1>
          </div>
          <div className="col-12 text-left selected-map-desc">
            Okullar MEB sistemi üzerinden güncel olarak listelenmektedir ve 3D
            yazıcı bağışlanabilecek okullar aşağıdadır.
          </div>
          <div className="col-12 pt-2 text-left selected-map-desc">
            Bekleyen Okul Sayısı : 0
          </div>
          <div className="col-12 selected-map-list text-left m-0 p-4 mt-4 row"></div>
        </div>
      </div>
    )
  }
}

export default SelectedMap
