import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import WelcomeIMG from '../img/sectionPrinterImage.png'
import {animateScroll as scroll, Events} from 'react-scroll'
export class WelcomeSection extends Component {
  constructor(props) {
    super(props)
    this.state = {selectedMap: 'İstanbul'}
    this.scrollTo = this.scrollTo.bind(this)
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function (to, element) {})
  }

  scrollTo() {
    scroll.scrollTo(750, {duration: 100, spy: true, smooth: true})
  }

  render() {
    return (
      <div className="welcomeSection container-xl container-lg p-0 col-12">
        <div className="my-auto mt-5 mb-5 p-0 d-flex align-items-center row m-0">
          <div className="col-12 col-lg-6 col-xl-6 p-3 welcomeLeft">
            <div className="col-12 text-left">
              <h1 className="welcomeHeader">
                Eğitim Öğretime
                <br />
                en etkili destek
              </h1>
            </div>
            <div className="col-12 text-left">
              <h4 className="welcomeDesc pt-3 pb-3">
                3D Yazıcı bekleyen okullar için siz de bağış
                <br />
                yaparak eğitim öğretime katkı sağlayabilirsiniz.
              </h4>
            </div>
            <div className="text-left pt-3 pb-3 d-flex welcomeButton">
              <Router>
                <Link to="" onClick={this.scrollTo} className="support-btn">
                  Destek Ol
                </Link>
                <Link to="" className="signup-btn">
                  Kayıt Ol
                </Link>
              </Router>
            </div>
          </div>
          <div className=" col-lg-6 col-xl-6 p-3 d-none d-xl-flex d-lg-flex justify-content-end align-items-center welcomeRight">
            <img alt="welcome-x2" src={WelcomeIMG} width="100%"></img>
          </div>
        </div>
        <div className="col-12 text-center welcomeHint pt-3 pb-3 p-1">
          Yardım etmek istediğiniz okulları dilerseniz aşşağıdan kendiniz
          belirleyebilir
          <br />
          veya belirli bir bölgeden yazıcısı olmayan okulları listesinden
          sırayla gitmesini isteyebilirsiniz.
        </div>
      </div>
    )
  }
}

export default WelcomeSection
