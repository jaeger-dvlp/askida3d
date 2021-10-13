import React, {Component} from 'react'
import MapContext from './MapContext'

export class SelectedMap extends Component {
  static contextType = MapContext

  constructor(props) {
    super(props)

    this.writeAllSchools()
  }

  componentDidMount() {
    document.querySelectorAll('.alphabet-elm').forEach((elm) => {
      elm.addEventListener('click', () => {
        document
          .querySelectorAll('.alphabet-elm.selected-alphabet')
          .forEach((selectedAlp) => {
            selectedAlp.classList.remove('selected-alphabet')
          })

        elm.classList.add('selected-alphabet')
      })
    })
  }

  writeAllSchools() {}

  render() {
    const {/*waitingSchoolCount, */ currentMap} = this.context
    //{waitingSchoolCount}
    return (
      <div
        data-aos="fade-in"
        data-aos-delay="300"
        className="container-lg container-xl pb-5 "
      >
        <div className="col-12 pt-5 p-xl-3 p-lg-3 p-1 selectedMap-cont m-0 d-flex row">
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
        <div className="col-12 d-flex flex-wrap alphabet justify-content-center align-items-center  p-xl-3 p-lg-3 p-1">
          <span className="alphabet-elm p-2">A</span>
          <span className="alphabet-elm p-2">B</span>
          <span className="alphabet-elm p-2">C</span>
          <span className="alphabet-elm p-2">D</span>
          <span className="alphabet-elm p-2">E</span>
          <span className="alphabet-elm p-2">F</span>
          <span className="alphabet-elm p-2 selected-alphabet">G</span>
          <span className="alphabet-elm p-2">H</span>
          <span className="alphabet-elm p-2">I</span>
          <span className="alphabet-elm p-2">J</span>
          <span className="alphabet-elm p-2">K</span>
          <span className="alphabet-elm p-2">L</span>
          <span className="alphabet-elm p-2">M</span>
          <span className="alphabet-elm p-2">O</span>
          <span className="alphabet-elm p-2">P</span>
          <span className="alphabet-elm p-2">R</span>
          <span className="alphabet-elm p-2">S</span>
          <span className="alphabet-elm p-2">T</span>
          <span className="alphabet-elm p-2">U</span>
          <span className="alphabet-elm p-2">V</span>
          <span className="alphabet-elm p-2">Y</span>
          <span className="alphabet-elm p-2">Z</span>
        </div>
      </div>
    )
  }
}

export default SelectedMap
