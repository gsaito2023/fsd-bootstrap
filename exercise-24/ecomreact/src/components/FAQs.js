import faq_icon from "../images/faq_icon_black.png";

const FAQs = () => {
  return (
    <div className="container-fluid" id="content">
      <div className="content">
        <nav className="breadcrumb">
          <a className="breadcrumb-item" href="/">
            Home
          </a>
          <span className="breadcrumb-item active" aria-current="page">
            FAQs
          </span>
        </nav>
        <div className="d-inline-flex flex-row align-items-center">
          <div>
            <img
              src={faq_icon}
              width="40"
              className="p-0 m-0"
              alt="FAQs"
              style={{ opacity: "50%" }}
            />
          </div>
          <div>
            <span className="text-secondary p-0 m-0 display-5 ps-1">FAQs</span>
          </div>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <b>What payment methods are accepted?</b>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Currently, we only accept payment via credit card for
                  individual memberships and teams consisting of less than 30
                  members.
                </p>
                <p>We do not accept PayPal.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <b>Do you offer gift cards?</b>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                At the present time, we do not offer gift cards. Offer it in the
                future is under consideration.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <b>What is your return policy?</b>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We have a 60 day guarantee. If you are unhappy within 60 days
                you can return the item. This means you get plenty of time to
                know your gear.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <b>Can I pay with PayPal?</b>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We currently do not accpet PayPal as a form of payment. Please
                either use Visa, Mastercard, AMEX or Discover. Thank you for
                your understanding.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
