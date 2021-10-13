import React, {Component} from 'react'
import Logo from '../img/logo.svg'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer col-12 m-0 p-0">
        <div className="container-lg container-xl">
          <div className="col-12 d-flex justify-content-center align-items-center flex-wrap p-3 pt-5 pb-5 m-0">
            <div className="col-12 d-flex justify-content-center">
              <img src={Logo} alt="footer-logo" width="150px" />
            </div>
            <div className="col-12 pt-4 bold d-flex justify-content-center text-center">
              Z Eksen Baskı Sistemleri ve Bilgi Teknolojileri San. ve Tic. A.Ş.
            </div>

            <div className="col-12 f-light pt-1 d-flex justify-content-center text-center">
              Yeşilçe Mh. Seçilmiş Sk. No : 2 {'  '} Kağıthane
              <span
                style={{
                  color: '#009ade',
                  paddingRight: '5px',
                  paddingLeft: '5px'
                }}
              >
                /
              </span>
              Istanbul
            </div>
            <div className="col-12 f-light d-flex justify-content-center align-items-center text-center">
              <a href="tel:0212 279 0060">0212 279 00 60</a>
              <span
                style={{
                  color: '#009ade',
                  paddingRight: '5px',
                  paddingLeft: '5px'
                }}
              >
                -
              </span>
              <a href="tel:0212 280 9293">0212 280 92 93</a>
            </div>
            <div className="f-light pt-3 pb-3 col-12 d-flex justify-content-center align-items-center text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              mattis tortor quis turpis cursus, eget aliquam mi ultricies.
              Maecenas a iaculis neque. Ut a neque accumsan justo ultrices
              vestibulum sed vitae sem. Vestibulum tempor, turpis a consectetur
              pellentesque, ligula est varius nunc, vel vehicula mauris massa
              sit amet erat. Suspendisse sagittis elit blandit, vehicula diam a,
              feugiat quam. Vestibulum elementum efficitur risus nec sodales.
              Sed mattis enim nec velit pretium facilisis. Donec quis eleifend
              orci. Curabitur euismod ipsum sed libero tristique, eleifend ante
              ultricies. Pellentesque tempus eros ex.
            </div>
            <div className="f-light col-12 d-flex justify-content-center pt-3 pb-3 align-items-center text-center">
              Copyright © Askıda 3D
            </div>
          </div>
        </div>
      </div>
    )
  }
}
