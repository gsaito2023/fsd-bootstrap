import React from "react";
import { useNavigate } from "react-router-dom";
import g_logo from "../images/g-logo.png";
import home_icon from "../images/home_icon_white.svg";
import favorites_icon from "../images/heart_icon_white.svg";
import cart_icon from "../images/cart_icon_white.svg";

const Navbar = () => {
  let navigate = useNavigate();

  const searchRouteChange = () => {
    navigate("search");
  };

  const loginRouteChange = () => {
    navigate("login");
  };

  return (
    <>
      <nav className="navbar navbar-custom navbar-expand-lg fixed-top text-light">
        <div className="container mx-0">
          <img
            src={g_logo}
            width="60"
            data-toggle="tooltip"
            title="George Electronics"
            alt="Logo"
          />
          <button
            className="navbar-toggler d-lg-none custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <a className="nav-link text-light" href="/" aria-current="page">
                  <img
                    src={home_icon}
                    width="45"
                    data-toggle="tooltip"
                    title="Home"
                    alt="Home"
                  />
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="index.html"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Our Products
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="cameras">
                    Cameras
                  </a>
                  <a className="dropdown-item" href="computers">
                    Computers
                  </a>
                  <a className="dropdown-item" href="tvs">
                    TVs
                  </a>
                  <a className="dropdown-item" href="provideo">
                    Professional Video
                  </a>
                  <a className="dropdown-item" href="mobile">
                    Mobile
                  </a>

                  <a className="dropdown-item" href="proaudio">
                    Pro Audio
                  </a>
                  <a className="dropdown-item" href="photoaccessories">
                    Photo Accessories
                  </a>
                  <a className="dropdown-item" href="dronescamcorders">
                    Drones & Camcorders
                  </a>
                  <a className="dropdown-item" href="lighting">
                    Lighting
                  </a>
                  <a className="dropdown-item" href="audiovisual">
                    Audio-Visual
                  </a>
                  <a className="dropdown-item" href="surveillance">
                    Surveillance
                  </a>
                  <a className="dropdown-item" href="optics">
                    Optics
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="aboutus">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="contactus">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="faqs">
                  FAQs
                </a>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Enter search here"
                width="100%"
              />
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
                onClick={searchRouteChange}
              >
                Search
              </button>
            </form>

            <span className="px-3">
              <a href="favorites">
                <img
                  src={favorites_icon}
                  width="40"
                  data-toggle="tooltip"
                  title="Favorites"
                  alt="Favorites"
                />
              </a>
            </span>
            <span>
              <a href="cart">
                {" "}
                <img
                  src={cart_icon}
                  width="40"
                  data-toggle="tooltip"
                  title="Cart"
                  alt="Cart"
                />
              </a>
            </span>
            <span className="ps-3">
              <button
                type="button"
                className="btn btn-outline-light"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Login
              </button>
            </span>
          </div>
        </div>
      </nav>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <div className="my-form">
                <h5 className="pb-5">
                  <i className="fas fa-user pe-2"></i>LOG IN TO YOUR ACCOUNT
                </h5>
                <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      <b>Email address</b>
                    </label>
                    <input
                      type="email"
                      className="form-control login-form"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      <b>Password</b>
                    </label>
                    <input
                      type="password"
                      className="form-control login-form"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn btn-light btn-login"
                      onClick={loginRouteChange}
                    >
                      LOGIN
                    </button>
                  </div>
                </form>

                <p className="py-5">
                  Not a member?
                  <a
                    href="signup"
                    className="text-light text-decoration-none ps-2"
                  >
                    Sign up now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
