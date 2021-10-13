import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Logo from '../img/logo.svg'
import {animateScroll as scroll} from 'react-scroll'
export class Header extends Component {
  constructor(props) {
    super(props)

    this.goToHome = this.goToHome.bind(this)
    this.scrollTo = this.scrollToPrinters.bind(this)
    this.scrollTo = this.scrollToGallery.bind(this)
  }
  goToHome() {
    window.location.href = 'https://askida3d.com'
  }
  scrollToPrinters() {
    scroll.scrollTo(1800, {duration: 200, spy: true, smooth: true})
  }

  scrollToGallery() {
    scroll.scrollTo(2500, {duration: 200, spy: true, smooth: true})
  }

  render() {
    return (
      <header
        data-aos="fade-down"
        className="container-lg container-xl col-12 p-2"
      >
        <div className="col-12 d-flex p-0 m-0">
          <div className="logo col-12 col-lg-6 col-xl-6 p-3 m-0 d-flex justify-content-center justify-content-xl-start justify-content-lg-start">
            <img
              onClick={() => {
                window.location.href = 'https://askida3d.com'
              }}
              alt="Askida3D Logo"
              src={Logo}
              height="50"
            ></img>
          </div>
          <div className="header-nav col-xl-6 col-lg-6 p-3 m-0 justify-content-end align-items-center d-xl-flex d-lg-flex d-none">
            <Router>
              <div className="p-0">
                <Link to="" onClick={this.goToHome}>
                  Anasayfa
                </Link>
                <div className="p-0 header-nav-anim-elm"></div>
              </div>
              <div className="">
                <Link to="" onClick={this.scrollToPrinters}>
                  3D Yazıcı
                </Link>
                <div className="header-nav-anim-elm"></div>
              </div>
              <div className="">
                <Link to="" onClick={this.scrollToGallery}>
                  Galeri
                </Link>
                <div className="header-nav-anim-elm"></div>
              </div>
            </Router>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
