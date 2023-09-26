import { Link } from "react-router-dom";
import cart_icon from "../images/add_to_cart_black.svg";
import camera_icon from "../images/camera_icon_black.svg";

const Cameras = () => {
  return (
    <div className="container-fluid py-2" id="content">
      <nav className="breadcrumb">
        <Link className="breadcrumb-item" to="/">
          Home
        </Link>
        <span className="breadcrumb-item active" aria-current="page">
          Cameras
        </span>
      </nav>

      <div className="d-inline-flex flex-row align-items-center">
        <div>
          <img
            src={camera_icon}
            width="60"
            className="p-0 m-0"
            alt="Camera"
            style={{ opacity: "50%" }}
          />
        </div>
        <div>
          <span className="text-secondary p-0 m-0 display-5">Cameras</span>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1689157832_1776281.jpg"
              alt="Sony a6700 Premium Mirrorless Camera"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="Sony a6700 Premium Mirrorless Camera"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-danger px-3 rounded-pill">New</span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  Sony a6700 Premium Mirrorless Camera
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(1)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$1,398.00</span>
                  <span className="discount-price">$419.40</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1667348713_1733214.jpg"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              alt="Canon EOS R6 Mark II Mirrorless Camera"
              title="Canon EOS R6 Mark II Mirrorless Camera"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-dark px-3 rounded-pill">
                    Top seller
                  </span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  Canon EOS R6 Mark II Mirrorless Camera
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(116)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$2,499.00</span>
                  <span className="discount-price">$749.70</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1464866449_1233412.jpg"
              alt="Canon PowerShot ELPH 360 HS Digital Camera (Black)"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="Canon PowerShot ELPH 360 HS Digital Camera (Black)"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-success px-3 rounded-pill">
                    In Stock
                  </span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  Canon PowerShot ELPH 360 HS Digital Camera (Black)
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(85)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$299.00</span>
                  <span className="discount-price">$89.70</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1562622339_1490985.jpg"
              alt="Canon PowerShot G7 X Mark III Digital Camera (Black)"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="Canon PowerShot G7 X Mark III Digital Camera (Black)"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-success px-3 rounded-pill">
                    In Stock
                  </span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  Canon PowerShot G7 X Mark III Digital Camera (Black)
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(52)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$749.00</span>
                  <span className="discount-price">$224.70</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1455749513_1223211.jpg"
              alt="Canon PowerShot G7 X Mark II Digital Camera"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="Canon PowerShot G7 X Mark II Digital Camera"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-success px-3 rounded-pill">
                    In Stock
                  </span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  Canon PowerShot G7 X Mark II Digital Camera
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(323)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$629.00</span>
                  <span className="discount-price">$188.70</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1688490906_1774544.jpg"
              alt="FUJIFILM INSTAX MINI EVO Instant Camera (Black)"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="FUJIFILM INSTAX MINI EVO Instant Camera (Black)"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-success px-3 rounded-pill">
                    In Stock
                  </span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  FUJIFILM INSTAX MINI EVO Instant Camera (Black)
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(63)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$199.00</span>
                  <span className="discount-price">$59.70</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1666779545_1731389.jpg"
              alt="Sony a7R V Premium Mirrorless Camera"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="Sony a7R V Premium Mirrorless Camera"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-success px-3 rounded-pill">
                    In Stock
                  </span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  Sony a7R V Premium Mirrorless Camera
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(97)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$3,898.00</span>
                  <span className="discount-price">$1169.40</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1685004530_1768277.jpg"
              alt="Leica Q3 Premium Digital Camera"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="Leica Q3 Premium Digital Camera"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-success px-3 rounded-pill">
                    In Stock
                  </span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  Leica Q3 Premium Digital Camera
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(13)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$5,995.00</span>
                  <span className="discount-price">$1798.50</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1683705043_1765622.jpg"
              alt="Nikon Z8 Premium Mirrorless Camera"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="Nikon Z8 Premium Mirrorless Camera"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-success px-3 rounded-pill">
                    In Stock
                  </span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  Nikon Z8 Premium Mirrorless Camera
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(92)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$3,996.00</span>
                  <span className="discount-price">$1198.80</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1602634176_1598385.jpg"
              alt="Canon EOS M50 Mark II Mirrorless Camera"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="Canon EOS M50 Mark II Mirrorless Camera"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-success px-3 rounded-pill">
                    In Stock
                  </span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  Canon EOS M50 Mark II Mirrorless Camera
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(72)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$599.00</span>
                  <span className="discount-price">$179.70</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1667382377_1731281.jpg"
              alt="FUJIFILM X-T5 Mirrorless Camera (Black)"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="FUJIFILM X-T5 Mirrorless Camera (Black)"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-success px-3 rounded-pill">
                    In Stock
                  </span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  FUJIFILM X-T5 Mirrorless Camera (Black)
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(96)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$1,699.00</span>
                  <span className="discount-price">$509.70</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1693311922_1784157.jpg"
              alt="Sony a7CR Premium Mirrorless Camera"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="Sony a7CR Premium Mirrorless Camera"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-danger px-3 rounded-pill">New</span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  Sony a7CR Premium Mirrorless Camera
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(2)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$1,298.00</span>
                  <span className="discount-price">$389.40</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1627386359_1655301.jpg"
              alt="Sony ZV-E10 Premium Mirrorless Camera"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="Sony ZV-E10 Premium Mirrorless Camera"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-success px-3 rounded-pill">
                    In Stock
                  </span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  Sony ZV-E10 Premium Mirrorless Camera
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(76)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$798.00</span>
                  <span className="discount-price">$239.40</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1649678752_1699922.jpg"
              alt="Kodak PIXPRO FZ55 Digital Camera"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="Kodak PIXPRO FZ55 Digital Camera"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-secondary px-3 rounded-pill">
                    Out of Stock
                  </span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  Kodak PIXPRO FZ55 Digital Camera
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(942)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$99.00</span>
                  <span className="discount-price">$29.70</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <img
                    src={cart_icon}
                    width="80"
                    style={{ opacity: "40%" }}
                    alt="/cart"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1563789974_1477205.jpg"
              alt="Olympus Tough TG-6 Digital Camera (Red)"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="Olympus Tough TG-6 Digital Camera (Red)"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-success px-3 rounded-pill">
                    In Stock
                  </span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  Olympus Tough TG-6 Digital Camera (Red)
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">
                    &#9733;&#9733;&#9733;&#9733;
                  </span>{" "}
                  <span className="text-dark">(157)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$499.00</span>
                  <span className="discount-price">$149.70</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white">
            <img
              src="https://static.bhphoto.com/images/images345x345/1681483534_1761641.jpg"
              alt="Ricoh GR III Diary Edition Digital Camera"
              className="img-fluid card-img-top"
              data-toggle="tooltip"
              title="Ricoh GR III Diary Edition Digital Camera"
            />
            <div className="p-4">
              <div className="py-3">
                <h4>
                  <span className="badge bg-success px-3 rounded-pill">
                    In Stock
                  </span>
                </h4>
              </div>
              <h5>
                <Link
                  to="/productdetails"
                  className="text-dark font-weight-bold"
                >
                  Ricoh GR III Diary Edition Digital Camera
                </Link>
              </h5>
              <p className="small mb-1 py-2">
                <Link to="/reviews" className="text-decoration-none">
                  <span className="font-weight-bold text-warning">&#9733;</span>{" "}
                  <span className="text-dark">(131)</span>
                </Link>
              </p>
              <div>
                <div>
                  <span className="retail-price">$1,016.00</span>
                  <span className="discount-price">$304.80</span>
                </div>
                <div className="add-to-cart">
                  {" "}
                  <Link to="/cart">
                    <img src={cart_icon} width="80" alt="/cart" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="pagination justify-content-center">
          <li className="page-item">
            <Link className="page-link" to="/comingsoon">
              Previous
            </Link>
          </li>
          <li className="page-item active">
            <Link
              className="page-link"
              to="/cameras"
              style={{ backgroundColor: "grey", border: "none" }}
            >
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/comingsoon">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/comingsoon">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/comingsoon">
              Next
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cameras;
