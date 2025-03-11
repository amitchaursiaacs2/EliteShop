import React from "react";
import "./Nav.css";
import Button from "@mui/material/Button";
import { IoIosArrowDown, IoIosGrid } from "react-icons/io";
import { Link } from "react-router-dom";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";

const Nav = () => {
  return (
    <>
      <div className="nav d-flex align-items-center">
        <div className="container-fluid">
          <div className="row position-relative">
            {/* part1 */}
            <div className="col-sm-2 part1 d-flex align-items-center">
              <Button className="bg-g text-white catTab">
                <IoIosGrid /> Browse All Categories <IoIosArrowDown />
              </Button>
            </div>

            {/* part2 */}
            <div className="col-sm-8 part2 position-static">
              <nav>
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <Button>
                      <Link>Home</Link>
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>About</Link>
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>Shop</Link>
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>Vendors</Link>
                    </Button>
                  </li>
                  <li className="list-inline-item position-static">
                    <Button>
                      <Link>
                        Mega menu
                        <IoIosArrowDown />
                      </Link>
                    </Button>
                    <div className="drop_menu megaMenu w-100">
                      <div className="row">
                        <div className="col">
                          <h4 className="text-g">Fruit & Vegetables</h4>
                          <ul
                            className="mt-4 mb-0"
                            style={{ paddingLeft: "0" }}
                          >
                            <li>
                              <Link to="">Meat & Poultry</Link>
                            </li>
                            <li>
                              <Link to="">Fesh Vegetables</Link>
                            </li>
                            <li>
                              <Link to="">Herbs & Seasonings</Link>
                            </li>
                            <li>
                              <Link to="">Cuts & Sprouts</Link>
                            </li>
                            <li>
                              <Link to="">Exotic Fruit & Veggies</Link>
                            </li>
                            <li>
                              <Link to="">Packaged Produce</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col">
                          <h4 className="text-g">Breakfast & Dairy</h4>
                          <ul
                            className="mt-4 mb-0"
                            style={{ paddingLeft: "0" }}
                          >
                            <li>
                              <Link to="">Meat & Poultry</Link>
                            </li>
                            <li>
                              <Link to="">Fesh Vegetables</Link>
                            </li>
                            <li>
                              <Link to="">Herbs & Seasonings</Link>
                            </li>
                            <li>
                              <Link to="">Cuts & Sprouts</Link>
                            </li>
                            <li>
                              <Link to="">Exotic Fruit & Veggies</Link>
                            </li>
                            <li>
                              <Link to="">Packaged Produce</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col">
                          <h4 className="text-g">Meat & Seafood</h4>
                          <ul
                            className="mt-4 mb-0"
                            style={{ paddingLeft: "0" }}
                          >
                            <li>
                              <Link to="">Meat & Poultry</Link>
                            </li>
                            <li>
                              <Link to="">Fesh Vegetables</Link>
                            </li>
                            <li>
                              <Link to="">Herbs & Seasonings</Link>
                            </li>
                            <li>
                              <Link to="">Cuts & Sprouts</Link>
                            </li>
                            <li>
                              <Link to="">Exotic Fruit & Veggies</Link>
                            </li>
                            <li>
                              <Link to="">Packaged Produce</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col">
                          <img
                            src="https://api.spicezgold.com/download/file_1734525653108_NewProject(20).jpg"
                            alt="No_img"
                            className="w-100"
                          />
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="list-inline-item">
                    <Button>
                      <Link>Blog</Link>
                    </Button>
                  </li>

                  <li className="list-inline-item">
                    <Button>
                      <Link>
                        Pages
                        <IoIosArrowDown />
                      </Link>
                    </Button>
                    <div className="drop_menu">
                      <ul style={{ paddingLeft: "0" }}>
                        <li>
                          <Button>
                            <Link to="/about">About Us</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to="/">Contact</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to="/">My Account</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to="/">Login</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to="/">Register</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to="/">Forgot Password</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to="/">Reset Password</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to="/">Purchase Guide</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to="/">Privacy Policy</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to="/">Terms of Service</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to="/">404 Page</Link>
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="list-inline-item">
                    <Button>
                      <Link>Contact</Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* part3 */}
            <div className="col-sm-2 part3 d-flex align-items-center">
              <div className="phoneNum d-flex align-items-center ms-auto">
                <span>
                  <HeadsetMicOutlinedIcon />
                </span>
                <div className="info ms-3">
                  <h3 className="text-g mb-0">282 - 856</h3>
                  <p className="mb-0">24/7 Support Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
