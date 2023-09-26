import { Link } from "react-router-dom";
import stay_tuned_img from "../images/stay-tuned.jpg";
const FormSubmit = () => {
  return (
    <div className="container-fluid content" id="content">
      <nav className="breadcrumb" id="top-content-about-us">
        <Link className="breadcrumb-item" to="/">
          Home
        </Link>
        <Link className="breadcrumb-item" to="/contactus">
          Contact Us
        </Link>
        <span className="breadcrumb-item active" aria-current="page">
          Form submittal
        </span>
      </nav>
      <div className="py-5 text-center">
        <img src={stay_tuned_img} alt="Stay tuned" />
      </div>
      <div className="py-5 text-center">
        <h1>Stay tuned.</h1>
        <h1>Form submittal page is coming soon!</h1>
      </div>
    </div>
  );
};

export default FormSubmit;
