import dog_img from "../images/pug-dog.jpg";
const PageNotFound = () => {
  return (
    <div className="container-fluid content" id="content">
      <nav className="breadcrumb" id="top-content-about-us">
        <a className="breadcrumb-item" href="/">
          Home
        </a>
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
          <a href="/" id="homepage-link">
            homepage
          </a>
          .
        </h1>
      </div>
    </div>
  );
};

export default PageNotFound;
