import React from 'react'
import "./TopProduct.css"
import { Link } from 'react-router-dom'
import { Rating } from '@mui/material'

const TopProduct = (props) => {
    return (
        <>
            <div className="topSell_box">
                <h3>
                    {
                        props.title
                    }
                </h3>

                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                            <img src="/assets/img/biryani.png" alt="" className="w-100" />
                        </Link>
                    </div>
                    <div className="info px-3">
                        <Link to="">
                            <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
                        </Link>
                        <Rating
                            name="half-rating-read"
                            defaultValue={3.5}
                            precision={0.5}
                            readOnly
                        />
                        <div className="d-flex align-items-center">
                            <span className="price text-g fw-bold">₹250.50</span>
                            <span className="oldPrice">₹350.50</span>
                        </div>
                    </div>
                </div>

                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                            <img src="/assets/img/biryani.png" alt="" className="w-100" />
                        </Link>
                    </div>
                    <div className="info px-3">
                        <Link to="">
                            <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
                        </Link>
                        <Rating
                            name="half-rating-read"
                            defaultValue={3.5}
                            precision={0.5}
                            readOnly
                        />
                        <div className="d-flex align-items-center">
                            <span className="price text-g fw-bold">₹250.50</span>
                            <span className="oldPrice">₹350.50</span>
                        </div>
                    </div>
                </div>

                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                            <img src="/assets/img/biryani.png" alt="" className="w-100" />
                        </Link>
                    </div>
                    <div className="info px-3">
                        <Link to="">
                            <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
                        </Link>
                        <Rating
                            name="half-rating-read"
                            defaultValue={3.5}
                            precision={0.5}
                            readOnly
                        />
                        <div className="d-flex align-items-center">
                            <span className="price text-g fw-bold">₹250.50</span>
                            <span className="oldPrice">₹350.50</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopProduct
