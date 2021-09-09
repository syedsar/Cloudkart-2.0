import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Home.css";
import Partner from "./Partner";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {

  useEffect(()=>{
    AOS.init({duration : 2000});
    AOS.refresh();
  },[])
  return (
    <div>
      <section id="home-header" className="pt-5">
        <div className="container-fluid pt-5 pb-3">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-12 col-lg-6 col-md-6 d-flex justify-content-center align-items-start flex-column order-2 order-lg-1 ">
                  <h1>
                    Welcome To <span>Cloudkart</span>
                  </h1>
                  <h5>
                    Cloudkart is on "A Mission of Enabling Digital
                    Trasformation"
                  </h5>
                  <h5>
                    We help our clients to achive their business and IT
                    objectives
                  </h5>
                  <h5>utilizing public cloud and digital services</h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <Link to="/services">
                      <div className="btn btn-outline-dark">Get Started</div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6 d-flex justify-content-center align-items-end flex-column order-1 order-lg-2">
                  <figure>
                    <img
                      id="img-animated"
                      className="img-fluid rounded"
                      src={"Images/home.png"}
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* project description section */}
      <section id="description">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto py-3 ">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12 py-2  bg-info">
                  <h1>3+</h1>
                  <h2>YEARS ESTABLISHED</h2>
                </div>
                <div className="col-lg-4 col-md-4 col-12 py-2 bg-warning">
                  <h1>50+</h1>
                  <h2>HAPPY CLIENTS GLOBALLY</h2>
                </div>
                <div className="col-lg-4 col-md-4 col-12 py-2 bg-success">
                  <h1>100+</h1>
                  <h2>PROJECTS COMPLETED</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="home-about">
        <div>
          <svg
            height="100%"
            width="100%"
            id="svg"
            viewBox="0 0 1440 220"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 99.07142857142858,218.85714285714286 198.14285714285717,237.71428571428572 322,226 C 445.85714285714283,214.28571428571428 594.4999999999999,172 737,181 C 879.5000000000001,190 1015.8571428571429,250.28571428571428 1132,262 C 1248.142857142857,273.7142857142857 1344.0714285714284,236.85714285714286 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              stroke-width="0"
              fill="	#000000"
              class="transition-all duration-300 ease-in-out delay-150"
              transform="rotate(-180 720 200)"
            ></path>
          </svg>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 my-2 d-flex flex-column justify-content-center align-items-sm-start " data-aos="fade-right">
              <h1>How We Are</h1>
              <h3>
                We Accelerate digital transformation, embrace change and move
                your business forward with modern IT services for modern IT
                needs.
              </h3>
              <p>
                We prioritize your needs, not our personal preferences. We’re
                completely platform-agnostic and have deep expertise in specific
                technologies, so we can work with whatever works best for you.
                Our mission is to deliver the promise of the cloud, helping
                enterprises navigate their unique journeys and build new
                foundations for future growth.
              </p>
              <div>
                  <Link to= '/about'>
                  <button className = 'btn btn-primary'>Read More</button>
                  </Link>
              </div>
            </div>

            <div className="col-12 col-lg-6 col-md-6 my-2 d-flex justify-content-lg-end justify-content-md-end justify-content-center" >
                <img className = 'img-fluid home-about-img' data-aos="flip-right" src={"Images/home.gif"} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className = 'partner-section'>
        <Partner />
      </section>

      <section className = 'footer-section'>
        <Footer />
      </section>

    </div>
  );
}

export default Home;
