import React, {Component} from 'react'

import PrinterIMG from '../img/sectionPrinterImage.png'

export default class PrinterSection extends Component {
  render() {
    return (
      <div
        className="container-xl printerSection container-lg p-3 mt-5"
        style={{overflowX: 'hidden'}}
      >
        <div className="col-12 d-flex  flex-wrap-reverse p-0 m-0 justify-content-center align-items-center">
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="col-12 col-xl-6 col-lg-6 p-3 d-flex flex-wrap justify-content-center align-items-center"
          >
            <div className="col-12 text-pos">
              <h1 className="p-0 printerSectionHeader">
                3D Yazıcının Teknik Özellikleri
              </h1>
            </div>
            <div className="col-12 text-pos">
              <ul className="p-4">
                <li>%100 yerli üretim ve tam destek.</li>

                <li>Aliquam mauris eu rius.</li>

                <li>Vestibulum daqibus neque mauris eu risus.</li>
                <li>Nucn dignissim risus metus dignissim risus.</li>
              </ul>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="p-0 m-0 col-12 col-xl-6 col-lg-6 p-3 d-flex justify-content-center align-items-center"
          >
            <img src={PrinterIMG} alt="x3_img" className="m-0 col-12" />
          </div>
        </div>
      </div>
    )
  }
}
