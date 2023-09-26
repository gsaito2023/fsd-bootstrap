import { Link } from "react-router-dom";
import dog_img from "../images/pug-dog.jpg";
const PageNotFound = () => {
  return (
    <div className="container-fluid content" id="content">
      <nav className="breadcrumb" id="top-content-about-us">
        <Link className="breadcrumb-item" to="/">
          Home
        </Link>
        <span className="breadcrumb-item active" aria-current="page">
          Page Not Found
        </span>
      </nav>
      <div className="py-5 text-center">
        <img src={dog_img} alt="Dog" />
      </div>
      <div className="py-5 text-center">
        <h1>Oops! SORRY, we couldn't find that page.</h1>
        <h1>
          Try going to our{" "}
          <Link to="/" id="homepage-link">
            homepage
          </Link>
          .
        </h1>
      </div>
    </div>
  );
};

export default PageNotFound;
