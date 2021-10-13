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
    scroll.scrollTo(900, {duration: 100, spy: true, smooth: true})
  }

  render() {
    return (
      <div
        data-aos="fade-in"
        data-aos-delay="400"
        className="welcomeSection container-xl container-lg p-0 col-12"
      >
        <div className="my-auto mt-5 mb-5  p-0 d-flex align-items-center row m-0">
          <div className="col-12 col-lg-6 col-xl-6 p-3 welcomeLeft">
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              className="col-12 text-pos"
            >
              <h1 className="welcomeHeader">
                Eğitim Öğretime
                <br />
                en etkili destek
              </h1>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              className="col-12 text-pos"
            >
              <h4 className="welcomeDesc pt-3 pb-3">
                3D Yazıcı bekleyen okullar için siz de bağış
                <br className="d-lg-block d-xl-block d-md-block d-none" />
                yaparak eğitim öğretime katkı sağlayabilirsiniz.
              </h4>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="text-pos pt-3 pb-3 d-flex justify-content-center justify-content-xl-start justify-content-lg-start welcomeButton"
            >
              <Router>
                <div className="d-lg-flex d-xl-flex d-inline ">
                  <Link to="" onClick={this.scrollTo} className="support-btn">
                    Destek Ol
                  </Link>
                </div>
                <div className="d-lg-flex d-xl-flex d-inline ">
                  <Link to="" className="signup-btn">
                    Kayıt Ol
                  </Link>
                </div>
              </Router>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="600"
            className=" col-lg-6 col-xl-6 p-3 d-none d-xl-flex d-lg-flex justify-content-end align-items-center welcomeRight"
          >
            <img alt="welcome-x2" className="col-12" src={WelcomeIMG}></img>
          </div>
        </div>
        <div
          className="col-12 margin-up-100"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="d-flex col-12 text-center justify-content-center align-items-center welcomeHintHeader pt-5 mt-5 pb-2 p-1">
            <span className="">Bekleyen Eğitim Kurumları</span>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="col-12 text-center welcomeHint p-3 pb-3 p-1"
        >
          Yardım etmek istediğiniz eğitim kurumlarını dilerseniz aşağıdan
          kendiniz belirleyebilir
          <br className="d-none d-lg-block d-xl-block " /> veya belirli bir
          bölgeden 3D Yazıcısı olmayan eğitim kurumlarını listesinden sırayla
          gitmesini isteyebilirsiniz.
        </div>
      </div>
    )
  }
}

export default WelcomeSection
