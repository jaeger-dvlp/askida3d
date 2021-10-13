import React, {Component} from 'react'

import PrizeIMG from '../img/prize.png'

export default class PrizeSection extends Component {
  render() {
    return (
      <div className="container-xl printerSection container-lg p-3 mt-5">
        <div className="col-12 d-flex  flex-wrap p-0 m-0 justify-content-center align-items-center">
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className=" m-0 col-12 col-xl-6 col-lg-6 p-3 d-flex justify-content-center align-items-center"
          >
            <img src={PrizeIMG} alt="prize_img" className=" m-0 col-12" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="col-12 col-xl-6 col-lg-6 p-3 d-flex flex-wrap justify-content-center align-items-center"
          >
            <div className="col-12 text-pos">
              <h1 className="p-0  printerSectionHeader">
                Geleceğe Değer Katanlara Minnettarız
              </h1>
            </div>
            <div className="welcomeDesc text-pos col-12">
              Yeni bir teknoloji olan 3D yazıcıları gelecek neslin gelişimi için
              okullara armağan ederek Öğretime sağlamış olduğunuz bu değer paha
              biçilemez.
              <br className="d-none d-xl-block d-lg-block" />
              Okulumuz ve öğrencilerimiz adına size en içten dileklerimizle
              teşekkür ederiz. Sizler için küçük bir teşekkür hediyesi
              hazırladık.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
