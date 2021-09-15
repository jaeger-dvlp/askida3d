import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Logo from '../img/logo.svg'

export class Header extends Component {
  render() {
    return (
      <header className="container-lg container-xl col-12 p-2">
        <div className="col-12 d-flex p-0 m-0">
          <div className="logo col-12 col-lg-6 col-xl-6 p-3 m-0 d-flex justify-content-start">
            <img alt="Askida3D Logo" src={Logo} height="50"></img>
          </div>
          <div className="header-nav col-xl-6 col-lg-6 p-3 m-0 justify-content-end align-items-center d-xl-flex d-lg-flex d-none">
            <Router>
              <div className="p-0">
                <Link to="">Anasayfa</Link>
                <div className="p-0 header-nav-anim-elm"></div>
              </div>
              <div className="">
                <Link to="">3D Yazıcılar</Link>
                <div className="header-nav-anim-elm"></div>
              </div>
              <div className="">
                <Link to="">Galeri</Link>
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
