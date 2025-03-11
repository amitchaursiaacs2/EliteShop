import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import NewsLetter from "../../../components/newsletter/NewsLetter";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <section className="homeSlider">
        <div className="container-fluid position-relative">
          <Slider {...settings} className="home_slider_main">
            <div className="item">
              <img
                src="/assets/img/Carousel1.jpg"
                alt="No_img"
                className="w-100"
              />
              <div className="info">
                <h2 className="mb-4">
                  Don't miss amazing <br /> Milks & Dairies deals...
                </h2>
                <p>Sign up for the daily newsletter...</p>
              </div>
            </div>

            <div className="item">
              <img
                src="/assets/img/Carousel2.jpg"
                alt="No_img"
                className="w-100"
              />
              <div className="info">
                <h2 className="mb-4">
                  Don't miss amazing <br /> Wines & Drinks deals...
                </h2>
                <p>Sign up for the daily newsletter...</p>
              </div>
            </div>

            <div className="item">
              <img
                src="/assets/img/Carousel3.jpg"
                alt="No_img"
                className="w-100"
              />
              <div className="info">
                <h2 className="mb-4">
                  Don't miss amazing <br /> Clothing & Beauty deals...
                </h2>
                <p>Sign up for the daily newsletter...</p>
              </div>
            </div>

            <div className="item">
              <img
                src="/assets/img/Carousel4.jpg"
                alt="No_img"
                className="w-100"
              />
              <div className="info">
                <h2 className="mb-4">
                  Don't miss amazing <br /> Fresh Food & Toy deals...
                </h2>
                <p>Sign up for the daily newsletter...</p>
              </div>
            </div>

            <div className="item">
              <img
                src="/assets/img/Carousel5.jpg"
                alt="No_img"
                className="w-100"
              />
              <div className="info">
                <h2 className="mb-4">
                  Don't miss amazing <br /> Fast Food deals...
                </h2>
                <p>Sign up for the daily newsletter...</p>
              </div>
            </div>

            <div className="item">
              <img
                src="/assets/img/Carousel6.jpg"
                alt="No_img"
                className="w-100"
              />
              <div className="info">
                <h2 className="mb-4">
                  Don't miss amazing <br /> Baking Meterial deals...
                </h2>
                <p>Sign up for the daily newsletter...</p>
              </div>
            </div>

            <div className="item">
              <img
                src="/assets/img/Carousel7.jpg"
                alt="No_img"
                className="w-100"
              />
              <div className="info">
                <h2 className="mb-4">
                  Don't miss amazing <br /> Vegetables deals...
                </h2>
                <p>Sign up for the daily newsletter...</p>
              </div>
            </div>

            <div className="item">
              <img
                src="/assets/img/Carousel8.jpg"
                alt="No_img"
                className="w-100"
              />
              <div className="info">
                <h2 className="mb-4">
                  Don't miss amazing <br /> Fresh Fruits deals...
                </h2>
                <p>Sign up for the daily newsletter...</p>
              </div>
            </div>

            <div className="item">
              <img
                src="/assets/img/Carousel9.jpg"
                alt="No_img"
                className="w-100"
              />
              <div className="info">
                <h2 className="mb-4">
                  Don't miss amazing <br /> Bread and Juice deals...
                </h2>
                <p>Sign up for the daily newsletter...</p>
              </div>
            </div>
            
            <div className="item">
              <img
                src="/assets/img/Carousel10.jpg"
                alt="No_img"
                className="w-100"
              />
              <div className="info">
                <h2 className="mb-4">
                  Don't miss amazing <br /> Fresh Seafood deals...
                </h2>
                <p>Sign up for the daily newsletter...</p>
              </div>
            </div>
          </Slider>

          <NewsLetter />
        </div>
      </section>
    </>
  );
};

export default Carousel;
