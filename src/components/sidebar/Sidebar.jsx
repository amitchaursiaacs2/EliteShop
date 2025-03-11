import { Button, Checkbox, Slider } from "@mui/material";
import React, { useState } from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

function valuetext(value) {
  return `${value}°C`;
}

const Sidebar = () => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <div className="sidebar">
        <div className="card border-0 shadow">
          <h3>Category</h3>
          <div className="catList">
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src="/assets/img/milk.png" alt="No_img" width={30} />
              </span>
              <h4 className="mb-0 ms-3 me-3">Milks & Dairies</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                30
              </span>
            </div>

            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src="/assets/img/milk.png" alt="No_img" width={30} />
              </span>
              <h4 className="mb-0 ms-3 me-3">Milks & Dairies</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                30
              </span>
            </div>

            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src="/assets/img/milk.png" alt="No_img" width={30} />
              </span>
              <h4 className="mb-0 ms-3 me-3">Milks & Dairies</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                30
              </span>
            </div>

            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src="/assets/img/milk.png" alt="No_img" width={30} />
              </span>
              <h4 className="mb-0 ms-3 me-3">Milks & Dairies</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                30
              </span>
            </div>

            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src="/assets/img/milk.png" alt="No_img" width={30} />
              </span>
              <h4 className="mb-0 ms-3 me-3">Milks & Dairies</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                30
              </span>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow">
          <h3>Fill by Price</h3>
          <Slider
            nin={0}
            step={1}
            max={1000}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="success"
          />
          <div className="d-flex pt-2 pb-2 priceRange">
            <span>
              From: <strong className="text-success">₹{value[0]}</strong>
            </span>
            <span className="ms-auto">
              From: <strong className="text-success">₹{value[1]}</strong>
            </span>
          </div>

          <div className="filters">
            <h5>Color</h5>
            <ul className="p-0 mb-0">
              <li>
                <Checkbox {...label} color="success" />
                Red(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                White(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Black(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Maroon(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Blue(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Voilet(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Purpul(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Aqualite(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Red(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Green(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                White(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Black(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Maroon(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Blue(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Voilet(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Purpul(56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Aqualite(56)
              </li>
            </ul>
          </div>

          <div className="filters">
            <h5>Item Collection</h5>
            <ul className="p-0 mb-0">
              <li>
                <Checkbox {...label} color="success" />
                New(68)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Used(50)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Refurbishe(509)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                New(68)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Used(50)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Refurbishe(509)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                New(68)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Used(50)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Refurbishe(509)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                New(68)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Used(50)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Refurbishe(509)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                New(68)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Used(50)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Refurbishe(509)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                New(68)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Used(50)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Refurbishe(509)
              </li>
            </ul>
          </div>

          <div className="d-flex">
            <Button className="btn btn-g">
              <FilterAltOutlinedIcon />
              Filter
            </Button>
          </div>
        </div>
        <img src="/assets/img/proBanner.jpg" alt="No_img" className="w-100" />
      </div>
    </>
  );
};

export default Sidebar;
