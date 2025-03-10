import React, { useState } from 'react'
import "./Listing.css"
import { Link } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Product from '../../components/product/Product'
import { Button } from '@mui/material'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';

const Listing = () => {
    const [openDrop, setOpenDrop] = useState(false);
    const [openDrop2, setOpenDrop2] = useState(false);

    return (
        <>
            <section className="listingPage">
                <div className="container-fluid">
                    <div className="breadCrumb">
                        <h1>Snaks</h1>
                        <ul className="list list-inline mb-0">
                            <li className="list-inline-item">
                                <Link to="">
                                    Home
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="">
                                    Shop
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="">
                                    Snack
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="listingData">
                        <div className="row">
                            <div className="col-md-3 sidebarWrapper">
                                <Sidebar />
                            </div>

                            <div className="col-md-9 rightContent homeProduct pt-0">

                                <div className="topStrip d-flex align-items-center">
                                    <p className='mb-0'>We found <span className="text-success">29</span> items for you!</p>
                                    <div className="ms-auto d-flex align-items-center">
                                        <div className="tab_ position-relative">
                                            <Button className="btn_" onClick={() => setOpenDrop(!openDrop)}>
                                                <GridViewOutlinedIcon /> Show: 50
                                            </Button>
                                            {openDrop !== false &&
                                                <ul className="dropMenu">
                                                    <li>
                                                        <Button className="align-items-center" onClick={() => setOpenDrop(false)}>50</Button>
                                                    </li>
                                                    <li>
                                                        <Button className="align-items-center" onClick={() => setOpenDrop(false)}>100</Button>
                                                    </li>
                                                    <li>
                                                        <Button className="align-items-center" onClick={() => setOpenDrop(false)}>150</Button>
                                                    </li>
                                                    <li>
                                                        <Button className="align-items-center" onClick={() => setOpenDrop(false)}>2000</Button>
                                                    </li>
                                                    <li>
                                                        <Button className="align-items-center" onClick={() => setOpenDrop(false)}>All</Button>
                                                    </li>
                                                </ul>
                                            }
                                        </div>
                                        <div className="tab_ position-relative ms-3">
                                            <Button className="btn_" onClick={() => setOpenDrop2(!openDrop2)}>
                                                <SortOutlinedIcon />
                                                Short by: Featured
                                            </Button>
                                            {openDrop2 !== false &&
                                                <ul className="dropMenu">
                                                    <li>
                                                        <Button className="align-items-center" onClick={() => setOpenDrop2(false)}>Featured</Button>
                                                    </li>
                                                    <li>
                                                        <Button className="align-items-center" onClick={() => setOpenDrop2(false)}>Price: Low To High</Button>
                                                    </li>
                                                    <li>
                                                        <Button className="align-items-center" onClick={() => setOpenDrop2(false)}>Price: High To Low</Button>
                                                    </li>
                                                    <li>
                                                        <Button className="align-items-center" onClick={() => setOpenDrop2(false)}>Release Date</Button>
                                                    </li>
                                                    <li>
                                                        <Button className="align-items-center" onClick={() => setOpenDrop2(false)}>Avg. Rating</Button>
                                                    </li>
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="productRow ps-4 pe-3">
                                    <div className="item">
                                        <Product tag="sale" />
                                    </div>
                                    <div className="item">
                                        <Product tag="new" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="new" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="best" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="sale" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="best" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="sale" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="best" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="sale" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="new" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="best" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="sale" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="best" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="best" />
                                    </div>
                                    <div className="item">
                                        <Product tag="hot" />
                                    </div>
                                    <div className="item">
                                        <Product tag="new" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="sale" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="hot" />
                                    </div>
                                    <div className="item">
                                        <Product tag="best" />
                                    </div>
                                    <div className="item">
                                        <Product tag="new" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="sale" />
                                    </div>
                                    <div className="item">
                                        <Product tag="hot" />
                                    </div>
                                    <div className="item">
                                        <Product tag="best" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="new" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                    <div className="item">
                                        <Product tag="hot" />
                                    </div>
                                    <div className="item">
                                        <Product />
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Listing
