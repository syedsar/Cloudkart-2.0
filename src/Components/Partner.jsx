import React from 'react'
import './partner.css'

function Partner() {
    return (
        <div>
            
                <div className="container my-5">
                <hr />
                    <div className="row my-3">
                        <div className="col-12 col-lg-12 col-md-12 d-flex justify-content-center">
                        <h1>WE ARE PARTNERS WITH</h1>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-12 col-lg-4 col-md-4">
                            <div className="card my-2">
                                <div className="card-body">
                                    <img className= 'img-fluid partner-img' src={"Images/aws-logo.svg"} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-4">
                            <div className="card my-2">
                                <div className="card-body">
                                    <img className= 'img-fluid partner-img' src={"Images/azure-logo.svg"} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-4">
                            <div className="card my-2">
                                <div className="card-body">
                                    <img className= 'img-fluid ' src={"Images/google-cloud.svg"} alt="" />
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="container">
                    <hr />
                </div>
        </div>
    )
}

export default Partner
