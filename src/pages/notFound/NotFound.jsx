import React from 'react'
import "./NotFound.css"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <seection className="notfound">
                <div className="container-fluid">
                    <div className="box">
                        <img src="/assets/img/error-404.png" alt="No_img" />
                        <br /> <br />
                        <h1>Page Not Found</h1>
                        <p>
                            The link you clicked may be broken or the pagee may havee been remmoved.
                            visit the Homepage or Contacct us about the problem
                        </p>

                        <div className="d-flex">
                            <Button className="btn-g btn-lg m-auto">
                                <Link to="/">
                                    Back to Home Page
                                </Link>
                            </Button>
                        </div>

                    </div>
                </div>
            </seection>
        </>
    )
}

export default NotFound
