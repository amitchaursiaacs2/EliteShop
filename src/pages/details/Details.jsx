import { Button, Link, Rating } from "@mui/material";
import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import Sidebar from "../../components/sidebar/Sidebar";

const Details = () => {
    const [zoomImg, setZoomImg] = useState(
        "https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-0-202411111126.jpg"
    );
    const [bigImg, setBigImg] = useState([1500, 1500]);
    const [smllImg, setSmllImg] = useState([150, 150]);
    const [activeSize, setActiveSize] = useState(0);
    const [inputValue, setInputValue] = useState(1)

    const zoomSlider = useRef();

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        // autoplay: true,
    };

    const goto = (url) => {
        setZoomImg(url);
    };

    const isActive = (index) => {
        setActiveSize(index);
    };

    const plus = () => {
        setInputValue(inputValue + 1)
    }
    const minus = () => {
        if (inputValue !== 1) {
            setInputValue(inputValue - 1)
        }
    }

    return (
        <>
            <section className="detailsPage">
                <div className="breadcrumbWrapper mb-4">
                    <div className="container-fluid">
                        <ul className="breadcrumb breadcrumb2 mb-0">
                            <li>
                                <Link to="">Home</Link>
                            </li>
                            <li>
                                <Link to="">Pictures</Link>
                            </li>
                            <li>
                                <Link to="">Summer 15</Link>
                            </li>
                            <li>Italy</li>
                        </ul>
                    </div>
                </div>

                <div className="container-fluid containerDetails">
                    <div className="row pt-3 pb-3">
                        <div className="col-md-9 leftPart">
                            <div className="row">
                                {/* Zoom Img Slider */}
                                <div className="col-md-5">
                                    <div className="productZoom">
                                        <InnerImageZoom
                                            zoomType="hover"
                                            zoomScale="1"
                                            src={`${zoomImg}?im=Resize=(${bigImg[0]},${bigImg[1]})`}
                                        />
                                    </div>

                                    <Slider
                                        {...settings}
                                        className="zoom_slider"
                                        ref={zoomSlider}
                                    >
                                        <div className="item">
                                            <img
                                                src={`https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-0-202411111126.jpg?im=Resize=(${smllImg[0]},${smllImg[1]})`}
                                                alt="No_img"
                                                className="w-100"
                                                onClick={() =>
                                                    goto(
                                                        "https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-0-202411111126.jpg"
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                src={`https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-1-202411111126.jpg?im=Resize=(${smllImg[0]},${smllImg[1]})`}
                                                alt="No_img"
                                                className="w-100"
                                                onClick={() =>
                                                    goto(
                                                        "https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-1-202411111126.jpg"
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                src={`https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-legal-images-o494260170-p606721409-2-202411111126.jpg?im=Resize=(${smllImg[0]},${smllImg[1]})`}
                                                alt="No_img"
                                                className="w-100"
                                                onClick={() =>
                                                    goto(
                                                        "https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-legal-images-o494260170-p606721409-2-202411111126.jpg"
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                src={`https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-legal-images-o494260170-p606721409-3-202411111126.jpg?im=Resize=(${smllImg[0]},${smllImg[1]})`}
                                                alt="No_img"
                                                className="w-100"
                                                onClick={() =>
                                                    goto(
                                                        "https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-legal-images-o494260170-p606721409-3-202411111126.jpg"
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                src={`https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-legal-images-o494260170-p606721409-4-202411111126.jpg?im=Resize=(${smllImg[0]},${smllImg[1]})`}
                                                alt="No_img"
                                                className="w-100"
                                                onClick={() =>
                                                    goto(
                                                        "https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-legal-images-o494260170-p606721409-4-202411111126.jpg"
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                src={`https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-legal-images-o494260170-p606721409-5-202411111126.jpg?im=Resize=(${smllImg[0]},${smllImg[1]})`}
                                                alt="No_img"
                                                className="w-100"
                                                onClick={() =>
                                                    goto(
                                                        "https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-legal-images-o494260170-p606721409-5-202411111126.jpg"
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                src={`https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-legal-images-o494260170-p606721409-6-202411111126.jpg?im=Resize=(${smllImg[0]},${smllImg[1]})`}
                                                alt="No_img"
                                                className="w-100"
                                                onClick={() =>
                                                    goto(
                                                        "https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-legal-images-o494260170-p606721409-6-202411111126.jpg"
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                src={`https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-legal-images-o494260170-p606721409-7-202411111126.jpg?im=Resize=(${smllImg[0]},${smllImg[1]})`}
                                                alt="No_img"
                                                className="w-100"
                                                onClick={() =>
                                                    goto(
                                                        "https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-legal-images-o494260170-p606721409-7-202411111126.jpg"
                                                    )
                                                }
                                            />
                                        </div>
                                    </Slider>
                                </div>

                                <div className="col-md-7 productInfo">
                                    <h1>Seeds of change organic quinoa, brown</h1>
                                    <div className="d-flex align-items-center mb-4 mt-3">
                                        <Rating
                                            name="half-rating-read"
                                            defaultValue={3.5}
                                            precision={0.5}
                                            readOnly
                                        />
                                        <span className="text-light ms-2">(32 reviews)</span>
                                    </div>

                                    <div className="priceSec d-flex align-items-center mb-3">
                                        <span className="text-g priceLrg">₹329</span>
                                        <div className="ms-2 d-flex flex-column">
                                            <span className="text-org">25% Off</span>
                                            <spna className="text-light oldPrice">₹530</spna>
                                        </div>
                                    </div>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Odit, quas? Sequi placeat debitis eaque ipsam omnis
                                        aspernatur rerum voluptate ullam?
                                    </p>

                                    <div className="productSize d-flex align-items-center">
                                        <span>Size / Weight</span>
                                        <ul className="list list-inline mb-0 ps-4">
                                            <li className="list-inline-item">
                                                <Link
                                                    className={`tag ${activeSize === 0 ? "active" : ""}`}
                                                    onClick={() => isActive(0)}
                                                >
                                                    50g
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link
                                                    className={`tag ${activeSize === 1 ? "active" : ""}`}
                                                    onClick={() => isActive(1)}
                                                >
                                                    60g
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link
                                                    className={`tag ${activeSize === 2 ? "active" : ""}`}
                                                    onClick={() => isActive(2)}
                                                >
                                                    80g
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link
                                                    className={`tag ${activeSize === 3 ? "active" : ""}`}
                                                    onClick={() => isActive(3)}
                                                >
                                                    100g
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link
                                                    className={`tag ${activeSize === 4 ? "active" : ""}`}
                                                    onClick={() => isActive(4)}
                                                >
                                                    150g
                                                </Link>
                                            </li>{" "}
                                        </ul>
                                    </div>
                                    <div className="addCartSection pt-4 pb-4 d-flex align-items-center">
                                        <div className="counterSec me-3">
                                            <input type="number" value={inputValue} />
                                            <span className="arrow plus" onClick={plus}><KeyboardArrowUpOutlinedIcon /></span>
                                            <span className="arrow minus" onClick={minus}><KeyboardArrowDownOutlinedIcon /></span>
                                        </div>

                                        <Button className="btn-g btn-lg addToCart"><ShoppingCartOutlinedIcon />Add to cart</Button>

                                        <Button className="btn-border btn-lg addToCart ms-3"><FavoriteBorderOutlinedIcon /></Button>

                                        <Button className="btn-border btn-lg addToCart ms-3"><CompareArrowsOutlinedIcon /></Button>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 rightPart sidebarWrapper">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Details;
