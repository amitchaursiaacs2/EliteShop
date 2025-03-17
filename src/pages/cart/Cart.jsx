import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Button, Rating } from "@mui/material";
import Quantity from "../../components/quantity/Quantity";

const Cart = () => {
  return (
    <>
      <div className="breadcrumbWrapper mb-4">
        <div className="container-fluid">
          <ul className="breadcrumb breadcrumb2 mb-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Shop</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>

      <section className="cartSection mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="d-flex align-items-center w-100">
                <div className="left">
                  <h1 className="hd mb-0">Your Cart</h1>
                  <p>
                    There are <span className="text-g">3</span> products in your
                    cart
                  </p>
                </div>
                <spna className="ms-auto clearCart d-flex align-items-center cursor">
                  <DeleteForeverOutlinedIcon /> Clear Cart
                </spna>
              </div>

              <div className="cartWrapper mt-4">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Sub total</th>
                        <th>Remove</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img
                                src="/assets/img/taco.png"
                                alt="No_img"
                                className="w-100"
                              />
                            </div>

                            <div className="info ps-4">
                              <Link>
                                <h4>Field roast chao cheese creamy original</h4>
                              </Link>
                              <Rating
                                name="half-rating-reaad"
                                value={4.5}
                                precision={0.5}
                                readOnly
                              />
                              <span className="text-light">(4.5)</span>
                            </div>
                          </div>
                        </td>

                        <td>
                          <span>₹220</span>
                        </td>

                        <td>
                          <Quantity />
                        </td>

                        <td>
                          <span className="text-g">₹220</span>
                        </td>

                        <td>
                          <span className="cursor">
                            <DeleteForeverOutlinedIcon />
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img
                                src="/assets/img/taco.png"
                                alt="No_img"
                                className="w-100"
                              />
                            </div>

                            <div className="info ps-4">
                              <Link>
                                <h4>Field roast chao cheese creamy original</h4>
                              </Link>
                              <Rating
                                name="half-rating-reaad"
                                value={4.5}
                                precision={0.5}
                                readOnly
                              />
                              <span className="text-light">(4.5)</span>
                            </div>
                          </div>
                        </td>

                        <td>
                          <span>₹220</span>
                        </td>

                        <td>
                          <Quantity />
                        </td>

                        <td>
                          <span className="text-g">₹220</span>
                        </td>

                        <td>
                          <span className="cursor">
                            <DeleteForeverOutlinedIcon />
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img
                                src="/assets/img/taco.png"
                                alt="No_img"
                                className="w-100"
                              />
                            </div>

                            <div className="info ps-4">
                              <Link>
                                <h4>Field roast chao cheese creamy original</h4>
                              </Link>
                              <Rating
                                name="half-rating-reaad"
                                value={4.5}
                                precision={0.5}
                                readOnly
                              />
                              <span className="text-light">(4.5)</span>
                            </div>
                          </div>
                        </td>

                        <td>
                          <span>₹220</span>
                        </td>

                        <td>
                          <Quantity />
                        </td>

                        <td>
                          <span className="text-g">₹220</span>
                        </td>

                        <td>
                          <span className="cursor">
                            <DeleteForeverOutlinedIcon />
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img
                                src="/assets/img/taco.png"
                                alt="No_img"
                                className="w-100"
                              />
                            </div>

                            <div className="info ps-4">
                              <Link>
                                <h4>Field roast chao cheese creamy original</h4>
                              </Link>
                              <Rating
                                name="half-rating-reaad"
                                value={4.5}
                                precision={0.5}
                                readOnly
                              />
                              <span className="text-light">(4.5)</span>
                            </div>
                          </div>
                        </td>

                        <td>
                          <span>₹220</span>
                        </td>

                        <td>
                          <Quantity />
                        </td>

                        <td>
                          <span className="text-g">₹220</span>
                        </td>

                        <td>
                          <span className="cursor">
                            <DeleteForeverOutlinedIcon />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-md-5 cartRightBox">
              <div className="card p-4">
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">Subtotal</h5>
                  <h3 className="ms-auto mb-0 fw-bold">
                    <span className="text-g">₹250</span>
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">Shipping</h5>
                  <h3 className="ms-auto mb-0 fw-bold">
                    <span>Free</span>
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">Estimate For</h5>
                  <h3 className="ms-auto mb-0 fw-bold">United Kingdom</h3>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">Total</h5>
                  <h3 className="ms-auto mb-0 fw-bold">
                    <span className="text-g">₹250</span>
                  </h3>
                </div>

                <Button className="btn-g btn-lg">Proceed to CheckOut</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
