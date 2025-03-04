import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../SearchDropdown/Dropdown";

const Header = () => {
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
                <Dropdown />
                <div className="search">
                  <input type="text" placeholder="Search for item" />
                  <FaSearch className="searchIcon cursor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
