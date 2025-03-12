import React, { useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Quantity = () => {
  const [inputValue, setInputValue] = useState(1);

  const plus = () => {
    setInputValue(inputValue + 1);
  };
  const minus = () => {
    if (inputValue !== 1) {
      setInputValue(inputValue - 1);
    }
  };

  return (
    <>
      <div className="addCartSection pt-4 pb-4 d-flex align-items-center">
        <div className="counterSec me-3">
          <input type="number" value={inputValue} />
          <span className="arrow plus" onClick={plus}>
            <KeyboardArrowUpOutlinedIcon />
          </span>
          <span className="arrow minus" onClick={minus}>
            <KeyboardArrowDownOutlinedIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default Quantity;
