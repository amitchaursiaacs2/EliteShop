import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import NewsLetter from "../../components/newsletter/NewsLetter";

const Footer = () => {
  return (
    <>
      <section className="newsLetter">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>
                Stay home & get your daily <br /> needs from our shop...
              </h2>
              <p>Start You'r Daily Shopping with Nest Mart</p>
              <br />
              <br />
              <NewsLetter />
            </div>
            <div className="img">
              <img
                src="/assets/img/newsletter.png"
                alt="No_img"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="footerWrapper">
        <div className="footerBoxes">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src="/assets/img/icon-1.svg" alt="No_img" />
                  </span>
                  <div className="info">
                    <h4>Best prices & offers</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src="/assets/img/icon-2.svg" alt="No_img" />
                  </span>
                  <div className="info">
                    <h4>Free delivery</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src="/assets/img/icon-3.svg" alt="No_img" />
                  </span>
                  <div className="info">
                    <h4>Great daily deal</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src="/assets/img/icon-4.svg" alt="No_img" />
                  </span>
                  <div className="info">
                    <h4>Wide assortment</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src="/assets/img/icon-5.svg" alt="No_img" />
                  </span>
                  <div className="info">
                    <h4>Easy returns</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 part1">
                <Link to="">
                  <img src="/assets/eliteshop1.svg" alt="" />
                </Link>
                <br />
                <p>Awesome grocery store website template</p>
                <br />
                <p>
                  <LocationOnOutlinedIcon />
                  <strong>Address:</strong>
                  C-26 Sector 65, Noida, Uttar Pradesh, 201301, India
                </p>
                <p>
                  <WifiCalling3OutlinedIcon />
                  <strong>Call Us:</strong>
                  (+91) - 88581 13691
                </p>
                <p>
                  <MarkEmailReadOutlinedIcon />
                  <strong>Email:</strong>
                  amitchaurasiaacs@gmail.com
                </p>
                <p>
                  <AccessTimeOutlinedIcon />
                  <strong>Hours:</strong>
                  10:00 - 18:00, Mon - Sat
                </p>
              </div>

              <div className="col-md-6 part2">
                <div className="row footer_2_2">
                  <div className="col">
                    <h3>Company</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0 p-0">
                      <li>
                        <Link to="/">About Us</Link>
                      </li>
                      <li>
                        <Link to="/">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="/">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/">Support Center</Link>
                      </li>
                      <li>
                        <Link to="/">Careers</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Account</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0 p-0">
                      <li>
                        <Link to="/">About Us</Link>
                      </li>
                      <li>
                        <Link to="/">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="/">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/">Support Center</Link>
                      </li>
                      <li>
                        <Link to="/">Careers</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Corporate</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0 p-0">
                      <li>
                        <Link to="/">About Us</Link>
                      </li>
                      <li>
                        <Link to="/">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="/">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/">Support Center</Link>
                      </li>
                      <li>
                        <Link to="/">Careers</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Popular</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0 p-0">
                      <li>
                        <Link to="/">About Us</Link>
                      </li>
                      <li>
                        <Link to="/">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="/">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/">Support Center</Link>
                      </li>
                      <li>
                        <Link to="/">Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 footer_2_3">
                <h3>Instaall App</h3>
                <br />

                <p>From App Srtore or Google Play</p>
                <br />

                <div className="d-flex">
                  <Link to="">
                    <img
                      src="/assets/img/goolePlay.png"
                      alt="No_img"
                      width={150}
                    />
                  </Link>
                  <Link to="">
                    <img
                      src="/assets/img/AppStore.png"
                      alt="No_img"
                      className="mx-2"
                      width={150}
                    />
                  </Link>
                </div>
                <br />

                <p>Secured Payment Gateways</p>
                <img
                  src="/assets/img/payGatway.webp"
                  alt="No_img"
                  width={300}
                />
              </div>
            </div>

            <hr />

            <div className="row lastStrp">
              <div className="col-md-3 Copyright">
                Copyright © {new Date().getFullYear()} All Rights Reserved |
                Elite Shop
              </div>

              <div className="col-md-6 d-flex">
                <div className="m-auto d-flex align-items-center">
                  <div className="phoneNum d-flex align-items-center mx-4">
                    <span>
                      <WifiCalling3OutlinedIcon />
                    </span>
                    <div className="info ml-3">
                      <h3 className="text-g mb-0">282 - 856</h3>
                      <p className="mb-0">24/7 Support Center</p>
                    </div>
                  </div>
                  <div className="phoneNum d-flex align-items-center mx-4">
                    <span>
                      <WifiCalling3OutlinedIcon />
                    </span>
                    <div className="info ml-3">
                      <h3 className="text-g mb-0">180 -056</h3>
                      <p className="mb-0">24/7 Support Center</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 part3">
                <div className="d-flex align-items-center">
                  <h5>Follow Us</h5>
                  <ul className="list list-inline">
                    <li className="list-inline-item">
                      <Link to="">
                        <FacebookOutlinedIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="">
                        <XIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="">
                        <InstagramIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="">
                        <YouTubeIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
