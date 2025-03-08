import React, { useState } from "react";
import "./Category.css";
import Slider from "react-slick";

const Category = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fffeff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    centerMode: true,
  };
  return (
    <>
      <div className="categiorySection">
        <div className="container-fluid">
          <h2 className="hd">Featured Categories</h2>
          <Slider
            {...settings}
            className="category_slider_main"
            id="category_slider_main"
          >
            {itemBg.length !== 0 &&
              itemBg.map((item, index) => {
                return (
                  <div className="item">
                    <div className="info" style={{ background: item }}>
                      <img src="/assets/img/bibimbap.png" alt="" />
                      <h5>Bibimbap</h5>
                      <p>25 Items</p>
                    </div>
                  </div>
                );
              })}
            {/* <div className="item">
                            <div className="info">
                                <img src="/assets/img/bibimbap.png" alt="" />
                                <h5>Bibimbap</h5>
                                <p>25 Items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="/assets/img/biryani.png" alt="" />
                                <h5>Biryani</h5>
                                <p>25 Items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="/assets/img/tteok.png" alt="" />
                                <h5>Tteok</h5>
                                <p>25 Items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="/assets/img/taco.png" alt="" />
                                <h5>Taco</h5>
                                <p>25 Items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="/assets/img/salad.png" alt="" />
                                <h5>Salad</h5>
                                <p>25 Items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="/assets/img/healthy-food.png" alt="" />
                                <h5>Healthy food</h5>
                                <p>25 Items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="/assets/img/fruits-diet.png" alt="" />
                                <h5>Fruits diet</h5>
                                <p>25 Items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="/assets/img/dish.png" alt="" />
                                <h5>Dish</h5>
                                <p>25 Items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src="/assets/img/diets.png" alt="" />
                                <h5>Diets</h5>
                                <p>25 Items</p>
                            </div>
                        </div> */}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Category;
