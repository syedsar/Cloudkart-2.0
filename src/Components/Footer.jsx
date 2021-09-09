import React from 'react'
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 col-md-6 d-flex justify-content-end order-2">
                        <h2>Follow US : <FaLinkedin /> <FaFacebookSquare /></h2>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 d-flex justify-content-start order-1">
                        <h1>Cloudkart</h1>
                    </div>
                </div>
                <hr />
                <div className="row">
                <div className="col-12 col-lg-6 col-md-6 d-flex justify-content-start">
                    <p>Copyright @2021 Cloudkart Corp, All rights reserved</p>
                </div>
                <div className="col-6 col-lg-6 col-md-6 d-flex justify-content-end">
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
