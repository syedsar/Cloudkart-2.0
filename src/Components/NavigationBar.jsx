import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import Contact from "./Contact";
import "./NavigationBar.css";

function NavigationBar() {
  const [modal, setModal] = useState(false)

  const toggle = ()=>{
    setModal(!modal)
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-sm-12 mx-auto">

          <nav className="navbar navbar-default fixed-top navbar-expand-lg navbar-light  ">
        <div className="container">
          <NavLink className="navbar-brand text-info fs-2 " to = '/'>
            
            <img src={'/Images/Cloudkart-logo.svg'} alt="logo" />CloudKart
            
          </NavLink>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-2">
              <li className="nav-item active mx-2">
                <NavLink activeClassName = 'menu-active' className="nav-link text-white fs-5 "  to='/'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item active  mx-2">
                <NavLink  activeClassName = 'menu-active' className="nav-link text-white  fs-5" to='/services'>
                  Services
                </NavLink>
              </li>

              <li className="nav-item active mx-2">
                <NavLink  activeClassName = 'menu-active' className="nav-link text-white  fs-5" to='/about'>
                  About
                </NavLink>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-outline-info rounded-pill  fs-5 text-white"
              onClick = {()=> setModal(true)}
              // data-bs-target="#contactModal"
              // data-bs-toggle="modal" 
            >
              Contact Us
            </button>

            {/* ------------------------Contact Modal------------------------------- */}
            {/* <div
              className="modal fade"
              id="contactModal"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title" id="staticBackdropLabel">
                      CONTACT US
                    </h2>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              </div>
            </div> */}
            <Contact modal = {modal} toggle = {toggle} />


          </div>
        </div>
      </nav>

          </div>
        </div>
      </div>
     
    </div>
  );
}

export default NavigationBar;
