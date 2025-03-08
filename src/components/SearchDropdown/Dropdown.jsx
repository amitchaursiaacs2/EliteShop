import React, { useState } from "react";
import "./Dropdown.css";
import { IoIosArrowDown } from "react-icons/io";
import { ClickAwayListener } from "@mui/material";

const Dropdown = ({ data, placeholder, icon }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [selectedItem, setSelectedItem] = useState(placeholder);

  const [listData, setListData] = useState(data);
  const [listCountryData, setListCountryData] = useState(data);

  const openDrop = () => {
    setOpen(!open);
  };

  const closeDrop = (index, name) => {
    setSelected(index);
    setOpen(false);
    setSelectedItem(name);
  };

  // Data filter funtion
  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    const list = listCountryData.filter((item) => {
      return item.toLowerCase().includes(keyword);
    });
    // For dublicate data
    const list2 = list.filter((item, index) => list.indexOf(item) === index);

    setListData(list2);
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div className="selectDropWrapper cursor position-relative">
          {icon}
          <span className="openSelect" onClick={openDrop}>
            {selectedItem.length > 10
              ? selectedItem.substr(0, 10) + "..."
              : selectedItem}
            <IoIosArrowDown className="arrowDrop" />{" "}
          </span>
          {open === true && (
            <div className="selectDrops">
              <div className="searchField">
                <input
                  type="text"
                  placeholder="Search here..."
                  onChange={filterList}
                />
              </div>
              <ul className="searctResults">
                <li
                  key={0}
                  onClick={() => closeDrop(0, placeholder)}
                  className={`${selected === placeholder ? "active" : ""}`}
                >
                  {placeholder}
                </li>
                {listData.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => closeDrop(index, item)}
                      className={`${selected === index ? "active" : ""}`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </ClickAwayListener>
    </>
  );
};

export default Dropdown;
