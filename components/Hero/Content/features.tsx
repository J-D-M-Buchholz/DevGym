import React from "react"
import Image from "next/image"

export const Features = () => {
  return (
    <div className="mb-70">
      <div className="box-topics border-gray-800 bg-gray-850">
        <div className="row">
          <div className="col-lg-2">
            <h5
              className="mb-15 color-white"
              data-wow-delay="0s"
            >
              Hot features
            </h5>
            <p
              className="color-gray-500 mb-20"
              data-wow-delay=".3s"
            >
              Don't miss out on the latest Features about Developing tips, Code
              reviews, Project Guides...
            </p>
            <div className="box-buttons-slider position-relative">
              <div className="swiper-button-prev swiper-button-prev-style-1"></div>
              <div className="swiper-button-next swiper-button-next-style-1"></div>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="box-swiper">
              <div className="swiper-container swiper-group-5">
                <div className="swiper swiper-wrapper swiper-initialized swiper-horizontal swiper-pointer-events">
                  <div
                    className="swiper-wrapper"
                    style={{
                      transform: "translate3d(-1512px, 0px, 0px)",
                      transitionDuration: "0ms;",
                    }}
                  >
                    <div
                      className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                      data-swiper-slide-index="2"
                      style={{ width: "222px", marginRight: "30px" }}
                    >
                      <div className="card-style-1">
                        <a href="/blog-archive">
                          <div className="card-image">
                            <Image
                              src="/welt.png"
                              width={222}
                              height={200}
                              alt="Genz"
                            />
                            <div className="card-info">
                              <div className="info-bottom">
                                <h6 className="color-white mb-5">Design</h6>
                                <p className="text-xs color-gray-500">
                                  {" "}
                                  78 Articles
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                      data-swiper-slide-index="3"
                      style={{ width: "222px", marginRight: "30px" }}
                    >
                      <div className="card-style-1">
                        <a href="/blog-archive">
                          <div className="card-image">
                            <Image
                              src="/welt.png"
                              width={222}
                              height={200}
                              alt="Genz"
                            />
                            <div className="card-info">
                              <div className="info-bottom">
                                <h6 className="color-white mb-5">Movie</h6>
                                <p className="text-xs color-gray-500">
                                  {" "}
                                  125 Articles
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                      data-swiper-slide-index="4"
                      style={{ width: "222px", marginRight: "30px" }}
                    >
                      <div className="card-style-1">
                        <a href="/blog-archive">
                          <div className="card-image">
                            <Image
                              src="/welt.png"
                              width={222}
                              height={200}
                              alt="Genz"
                            />
                            <div className="card-info">
                              <div className="info-bottom">
                                <h6 className="color-white mb-5">Lifestyle</h6>
                                <p className="text-xs color-gray-500">
                                  {" "}
                                  45 Articles
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
