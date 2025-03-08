import React from 'react'
import "./Banner.css"

const Banner = () => {
    return (
        <>
            <div className="bannerSection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="box">
                                <img src="/assets/img/card1.jpg" alt="No_img" className="w-100 transition" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="box">
                                <img src="/assets/img/card2.jpg" alt="No_img" className="w-100 transition" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="box">
                                <img src="/assets/img/card3.jpg" alt="No_img" className="w-100 transition" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
