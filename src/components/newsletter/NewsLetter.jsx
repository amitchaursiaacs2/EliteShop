import React from "react";
import "./NewsLetter.css";
import { Button } from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";

const NewsLetter = () => {
  return (
    <>
      <div className="newsBanner">
        <NearMeOutlinedIcon />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
        />
        <Button className="bg-g">Subscribe</Button>
      </div>
    </>
  );
};

export default NewsLetter;
