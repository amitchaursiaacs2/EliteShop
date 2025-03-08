import React from "react";
import "./Home.css";
import Carousel from "./slider/Carousel";
import Category from "../../components/catSlider/Category";
import Banner from "../../components/banners/Banner";
import Product from "../../components/product/Product";
import Slider from "react-slick";
import TopProduct from "./topProducts/TopProduct";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  return (
    <>
      <Carousel />
      <Category />
      <Banner />

      {/* Popular Products Section */}
      <section className="homeProduct">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <ul className="list list-inline ms-auto filterTab mb-0">
              <li className="list-inline-item">
                <a href="" className="cursor">
                  All
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Milk & Dairies
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Coffes & Teas
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Pet Foods
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Meats
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Vegetables
                </a>
              </li>
            </ul>
          </div>

          <div className="productRow">
            <div className="item">
              <Product tag="hot" />
            </div>
            <div className="item">
              <Product tag="sale" />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="sale" />
            </div>
            <div className="item">
              <Product />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Best Salls */}
      <section className="homeProduct homeProduct2 pt-0">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Daily Best Salls</h2>
            <ul className="list list-inline ms-auto filterTab mb-0">
              <li className="list-inline-item">
                <a href="/" className="cursor">
                  Featured
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" className="cursor">
                  Popular
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" className="cursor">
                  New Added
                </a>
              </li>
            </ul>
          </div>

          <br />
          <br />

          <div className="row">
            <div className="col-md-3">
              <img
                src="/assets/img/proBanner.jpg"
                alt="No_img"
                className="w-100"
              />
            </div>

            <div className="col-md-9">
              <Slider {...settings} className="product_slider_main">
                <div className="item">
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="best" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product tag="best" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="topProducts">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProduct title="Top Selling" />
            </div>
            <div className="col">
              <TopProduct title="Trainding Products" />
            </div>
            <div className="col">
              <TopProduct title="Recently Added" />
            </div>
            <div className="col">
              <TopProduct title="Top Rated" />
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetter">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>Stay home & get your daily <br /> needs from our shop...</h2>
              <p>Start You'r Daily Shopping with Nest Mart</p>
              <br /><br />
              <NewsLetter />

            </div>
            <div className="img">
              <img src="/assets/img/newsletter.png" alt="No_img" className="w-100" />
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  );
};

export default Home;
