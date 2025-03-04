import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import Dropdown from "../SearchDropdown/Dropdown";
import axios from "axios";
import { IoCartOutline, IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { FaRotate } from "react-icons/fa6";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CameraswitchOutlinedIcon from '@mui/icons-material/CameraswitchOutlined';

const Header = () => {
  const [categories, setCategories] = useState([
    "Milks & Daairies",
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

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src="/assets/eliteshop.svg" alt="" />
            </div>
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <Dropdown data={categories} placeholder={"Categories"} icon={false} />
                <div className="search">
                  <input type="text" placeholder="Search for item" />
                  <FaSearch className="searchIcon cursor" />
                </div>
              </div>
            </div>

            <div className="col-sm-5 d-flex align-items-center">
              <div className="ml-auto d-flex align-items-center">
                <div className="counrtyWrapper">
                  <Dropdown data={countryList} placeholder={"Location"} icon=<IoLocationOutline style={{ opacity: 0.7 }} /> />
                </div>

                <ul className="list list-inline mb-0 headerTabs">
                  <li className="list-inline-item">
                    <span> <CameraswitchOutlinedIcon />
                      <span className="badge bg-success rounded-circle">
                        3
                      </span>
                      Compare
                    </span>
                  </li>
                </ul>

                <ul className="list list-inline mb-0 headerTabs">
                  <li className="list-inline-item">
                    <span> <FavoriteBorderOutlinedIcon />
                      <span className="badge bg-success rounded-circle">
                        3
                      </span>
                      Wishlist
                    </span>
                  </li>
                </ul>

                <ul className="list list-inline mb-0 headerTabs">
                  <li className="list-inline-item">
                    <span> <LocalMallOutlinedIcon />
                      <span className="badge bg-success rounded-circle">
                        3
                      </span>
                      Cart
                    </span>
                  </li>
                </ul>

                <ul className="list list-inline mb-0 headerTabs">
                  <li className="list-inline-item">
                    <span> <PermIdentityOutlinedIcon />
                      Account
                    </span>

                    <ul className="dropMenu">

                    </ul>

                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
