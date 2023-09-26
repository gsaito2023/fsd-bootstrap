import { Link } from "react-router-dom";
import camera_img from "../images/grid-cameras.jpg";
import computer_img from "../images/grid-computers.jpg";
import tv_img from "../images/grid-TVs.jpg";
import video_img from "../images/grid-video-recording.jpg";
import mobile_img from "../images/grid-mobile.jpg";
import audiorec_img from "../images/grid-audio-recording.jpg";
import tripod_img from "../images/grid-tripod.jpg";
import drones_img from "../images/grid-drones.jpg";
import lighting_img from "../images/grid-lighting.jpg";
import projectors_img from "../images/grid-projectors.jpg";
import security_img from "../images/grid-security-cameras.jpg";
import optics_img from "../images/grid-optics.jpg";
import guarantee_icon from "../images/guarantee-black.svg";
import centerpiece_sale_img from "../images/centerpiece-sale.png";
import centerpiece_camera_img from "../images/centerpiece-cameras.webp";
import centerpeice_tv_img from "../images/centerpiece-tv.jpg";

const Home = () => {
  return (
    <>
      <div className="container-fluid py-2" id="content">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{
                backgroundImage: `url(${centerpiece_sale_img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
              }}
            >
              <div className="container">
                <div
                  className="d-flex justify-content-center"
                  id="save-now-cta"
                >
                  <Link
                    to="cameras"
                    className="btn btn-lg btn-danger py-3"
                    style={{
                      backgroundColor: "red",
                      width: "250px",
                      height: "85px",
                    }}
                  >
                    <span className="display-6 fw-bold">Save now</span>
                  </Link>
                </div>
                <h1 id="sales-message" style={{ fontSize: "36pt" }}>
                  70% off site wide! Has George lost all his marbles?!
                </h1>
              </div>
            </div>

            <div
              className="carousel-item"
              style={{
                backgroundImage: `url(${centerpiece_camera_img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
              }}
            >
              <div className="container">
                <h1>Browse our collections of cameras</h1>
              </div>
            </div>

            <div
              className="carousel-item"
              style={{
                backgroundImage: `url(${centerpeice_tv_img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
              }}
            >
              <div className="container">
                <h1>Browse our collections of TVs</h1>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container">
          <h1 className="display-1" id="our-products-homepage">
            Our Products
          </h1>

          <div className="row " id="product-grid-rows">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 product-grid-cell">
              <Link to="cameras" className="link-dark">
                <img
                  src={camera_img}
                  width="100%"
                  data-toggle="tooltip"
                  title="Cameras"
                  alt="Cameras"
                />
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 product-grid-cell">
              <Link to="computers" className="link-dark">
                <img
                  src={computer_img}
                  width="100%"
                  data-toggle="tooltip"
                  title="Computers"
                  alt="Computers"
                />
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 product-grid-cell">
              <Link to="tvs" className="link-dark">
                <img
                  src={tv_img}
                  width="100%"
                  data-toggle="tooltip"
                  title="TVs"
                  alt="TVs"
                />
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 product-grid-cell">
              <Link to="provideo" className="link-dark">
                <img
                  src={video_img}
                  width="100%"
                  data-toggle="tooltip"
                  title="Professional Video"
                  alt="Professional Video"
                />
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 product-grid-cell">
              <Link to="mobile" className="link-dark">
                <img
                  src={mobile_img}
                  width="100%"
                  data-toggle="tooltip"
                  title="Mobile"
                  alt="Mobile"
                />
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 product-grid-cell">
              <Link to="proaudio" className="link-dark">
                <img
                  src={audiorec_img}
                  width="100%"
                  data-toggle="tooltip"
                  title="Pro Audio"
                  alt="Pro Audio"
                />
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 product-grid-cell">
              <Link to="photoaccessories" className="link-dark">
                <img
                  src={tripod_img}
                  width="100%"
                  data-toggle="tooltip"
                  title="Photo Accessories"
                  alt="Tripod"
                />
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 product-grid-cell">
              <Link to="dronescamcorders" className="link-dark">
                <img
                  src={drones_img}
                  width="100%"
                  data-toggle="tooltip"
                  title="Drones and Camcorders"
                  alt="Drones and Camcorders"
                />
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 product-grid-cell">
              <Link to="lighting" className="link-dark">
                <img
                  src={lighting_img}
                  width="100%"
                  data-toggle="tooltip"
                  title="Lighting"
                  alt="Lighting"
                />
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 product-grid-cell">
              <Link to="audiovisual" className="link-dark">
                <img
                  src={projectors_img}
                  width="100%"
                  data-toggle="tooltip"
                  title="Audio-Visual"
                  alt="Audio-Visual"
                />
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 product-grid-cell">
              <Link to="surveillance" className="link-dark">
                <img
                  src={security_img}
                  width="100%"
                  data-toggle="tooltip"
                  title="Surveillance"
                  alt="Surveillance"
                />
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 product-grid-cell">
              <Link to="optics" className="link-dark">
                <img
                  src={optics_img}
                  width="100%"
                  data-toggle="tooltip"
                  title="Optics"
                  alt="Optics"
                />
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-center" id="guarantee-icon">
            <img
              src={guarantee_icon}
              style={{ width: "200px" }}
              className="align-items-center"
              alt="Guarantee"
            />
          </div>

          <div className="display-1 text-center" id="guarantee-text">
            <b>~ 60 day guarantee ~</b>
            <p className="display-6">
              This means you get plenty of time to know your gear. If you're not
              satisfied, you can return items that are complete and like new
              with 60 days.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
