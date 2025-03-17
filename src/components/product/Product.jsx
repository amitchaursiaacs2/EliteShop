import React from "react";
import "./Product.css";
import { Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CameraswitchOutlinedIcon from "@mui/icons-material/CameraswitchOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const Product = (props) => {
  return (
    <>
      <div className="productThumbs">
        {props.tag !== null && props.tag !== undefined && (
          <span className={`badge ${props.tag}`}>{props.tag}</span>
        )}

        <Link>
          <div className="imgWrapper">
            <img
              src="/assets/img/product1.webp"
              alt="No_img"
              className="w-100"
            />
            <div className="overlay transition">
              <ul className="list list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="/" className="cursor" tooltip="Add to Wishlist">
                    <FavoriteBorderOutlinedIcon />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/" className="cursor" tooltip="Compaire">
                    <CameraswitchOutlinedIcon />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/" className="cursor" tooltip="Quick View">
                    <RemoveRedEyeOutlinedIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Link>

        <div className="info">
          <span className="d-block catName">Skin</span>
          <h4 className="title">
            <Link>
              GlowBoost Hydrating Serum for Radiant, Smooth, and Youthful Skin
            </Link>
          </h4>
          <Rating
            name="half-rating-read"
            defaultValue={3.5}
            precision={0.5}
            readOnly
          />
          <span className="brand d-block text-g">
            By <Link className="text-g">Organic pro.</Link>
          </span>

          <div className="d-flex align-items-center mt-3">
            <div className="d-flex align-items-center">
              <span className="price text-g fw-bold">₹250.50</span>
              <span className="oldPrice">₹350.50</span>
            </div>
            <Button className="ms-auto">
              <ShoppingCartOutlinedIcon />
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
