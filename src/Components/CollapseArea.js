import React, {Component} from 'react'

export default class CollapseArea extends Component {
  render() {
    return (
      <div
        data-aos="fade-in"
        data-aos-delay="400"
        className="container-xl collapse-area container-lg mt-5 pt-5 mb-5 pb-5 p-3 "
      >
        <div className="col-12 p-3 d-flex flex-wrap ">
          <div className="col-12">
            <h1 className="col-12 printerSectionHeader">
              Sıkça Sorulan Sorular
            </h1>
          </div>
          <div id="accordion" className="collapse-area pt-4  col-12">
            <div className="collapsable-area">
              <div className="" id="headinONE">
                <h5 className="mb-0">
                  <button
                    className="d-flex align-items-center"
                    data-toggle="collapse"
                    data-target="#collapseONE"
                    aria-expanded="false"
                    aria-controls="collapseONE"
                  >
                    <span className="plus d-flex justify-content-center align-items-center text-center">
                      -
                    </span>{' '}
                    Sıkça Sorulan Soru #1
                  </button>
                </h5>
              </div>

              <div
                id="collapseONE"
                className="collapse"
                aria-labelledby="headingONE"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Design is an evolutionary process, and filler text is just one
                  tool in your progress-pushing arsenal. Use it where it makes
                  sense to use it, and pull it once the natural process
                  indicates that it’s time to roll out a descendant built with
                  real content.
                </div>
              </div>
            </div>
            <div className="collapsable-area">
              <div className="" id="headingTWO">
                <h5 className="mb-0">
                  <button
                    className="collapsed d-flex align-items-center"
                    data-toggle="collapse"
                    data-target="#collapseTWO"
                    aria-expanded="false"
                    aria-controls="collapseTWO"
                  >
                    <span className="plus d-flex justify-content-center align-items-center text-center">
                      -
                    </span>
                    Sıkça Sorulan Soru #2
                  </button>
                </h5>
              </div>
              <div
                id="collapseTWO"
                className="collapse"
                aria-labelledby="headingTWO"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Use filler text where it helps your design process, but use
                  real content if you’ve got it, as long as it doesn’t distract
                  and slow down your design process.
                </div>
              </div>
            </div>

            <div className="collapsable-area">
              <div className="" id="headingTHREE">
                <h5 className="mb-0">
                  <button
                    className="collapsed d-flex align-items-center"
                    data-toggle="collapse"
                    data-target="#collapseTHREE"
                    aria-expanded="false"
                    aria-controls="collapseTHREE"
                  >
                    <span className="plus d-flex justify-content-center align-items-center text-center">
                      -
                    </span>
                    Sıkça Sorulan Soru #3
                  </button>
                </h5>
              </div>
              <div
                id="collapseTHREE"
                className="collapse"
                aria-labelledby="headingTHREE"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Use filler text where it helps your design process, but use
                  real content if you’ve got it, as long as it doesn’t distract
                  and slow down your design process.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
