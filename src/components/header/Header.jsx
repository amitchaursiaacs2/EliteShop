import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../SearchDropdown/Dropdown";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CameraswitchOutlinedIcon from "@mui/icons-material/CameraswitchOutlined";
import Button from "@mui/material/Button";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { ClickAwayListener } from "@mui/material";
import Nav from "./nav/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  const [openDrop, setOpenDrop] = useState(false);
  const headerRef = useRef();

  const [categories, setCategories] = useState([
    "Milks & Dairies",
    "Wines & Drinks",
    "Clothing & Beauty",
    "Fresh Food & Toy",
    "Fast Food",
    "Baking Meterial",
    "Vegetables",
    "Fresh Fruits",
    "Bread and Juice",
    "Fresh Seafood",
  ]);

  const countryList = [];

  const getCountries = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.map((item) => {
            countryList.push(item.country);
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCountries("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position > 100) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    });
  }, []);

  return (
    <>
      <div className="headerWrapper" ref={headerRef}>
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2">
                <img src="/assets/eliteshop1.svg" alt="" />
              </div>
              <div className="col-sm-5 d-flex align-items-center">
                <div className="headerSearch d-flex align-items-center">
                  <Dropdown
                    data={categories}
                    placeholder={"Categories"}
                    icon={false}
                  />
                  <div className="search">
                    <input type="text" placeholder="Search for item" />
                    <FaSearch className="searchIcon cursor" />
                  </div>
                </div>
              </div>

              <div className="col-sm-5 d-flex align-items-center">
                <div className="ms-auto d-flex align-items-center">
                  <div className="counrtyWrapper">
                    <Dropdown
                      data={countryList}
                      placeholder={"Location"}
                      icon=<IoLocationOutline style={{ opacity: 0.7 }} />
                    />
                  </div>

                  <ul className="list list-inline mb-0 headerTabs">
                    <li className="list-inline-item">
                      <span>
                        {" "}
                        <CameraswitchOutlinedIcon />
                        <span className="badge bg-success rounded-circle">
                          3
                        </span>
                        Compare
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span>
                        {" "}
                        <FavoriteBorderOutlinedIcon />
                        <span className="badge bg-success rounded-circle">
                          3
                        </span>
                        Wishlist
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span>
                        {" "}
                        <LocalMallOutlinedIcon />
                        <span className="badge bg-success rounded-circle">
                          3
                        </span>
                        <Link to={"/cart"}>Cart</Link>
                      </span>
                    </li>

                    {/* Account */}
                    <ClickAwayListener onClickAway={() => setOpenDrop(false)}>
                      <li className="list-inline-item">
                        <span onClick={() => setOpenDrop(!openDrop)}>
                          <PermIdentityOutlinedIcon />
                          Account
                        </span>

                        {openDrop !== false && (
                          <ul className="dropMenu">
                            <li>
                              <Button className="align-items-center">
                                <PermIdentityOutlinedIcon /> My Account
                              </Button>
                            </li>
                            <li>
                              <Button className="align-items-center">
                                <RoomOutlinedIcon /> Order Tracking
                              </Button>
                            </li>
                            <li>
                              <Button className="align-items-center">
                                <FavoriteBorderOutlinedIcon /> My Wishlist
                              </Button>
                            </li>
                            <li>
                              <Button className="align-items-center">
                                <SettingsOutlinedIcon /> Setting
                              </Button>
                            </li>
                            <li>
                              <Button className="align-items-center">
                                <LogoutOutlinedIcon /> Sign Out
                              </Button>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ClickAwayListener>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Nav />
      </div>

      <div className="afterHeader"></div>
    </>
  );
};

export default Header;
