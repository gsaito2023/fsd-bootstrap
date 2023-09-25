import stay_tuned_img from "../images/stay-tuned.jpg";
const GiftCards = () => {
  return (
    <div className="container-fluid content" id="content">
      <nav className="breadcrumb" id="top-content-about-us">
        <a className="breadcrumb-item" href="/">
          Home
        </a>
        <span className="breadcrumb-item active" aria-current="page">
          Gift Cards
        </span>
      </nav>
      <div className="py-5 text-center">
        <img src={stay_tuned_img} alt="Stay tuned" />
      </div>
      <div className="py-5 text-center">
        <h1>Stay tuned.</h1>
        <h1>Gift Cards page is coming soon!</h1>
      </div>
    </div>
  );
};

export default GiftCards;
