import faq_icon from "../images/faq_icon_black.png";
import AccordionData from "../AccordionData";

const FAQs = () => {
  return (
    <div className="container-fluid" id="content">
      <div className="content faqs">
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
          {AccordionData.map((panel) => {
            return <AccordionComponent {...panel} />;
          })}
        </div>
      </div>
    </div>
  );
};

const AccordionComponent = (props) => {
  const { name, title, text } = props;
  const targetName = "#" + name;
  const shouldShow =
    name === "flush-collapseOne"
      ? "accordion-collapse collapse show"
      : "accordion-collapse collapse ";
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={targetName}
          aria-expanded="true"
          aria-controls={name}
        >
          <b>{title}</b>
        </button>
      </h2>
      <div id={name} className={shouldShow} data-bs-parent="#accordionExample">
        <div className="accordion-body">{text}</div>
      </div>
    </div>
  );
};

export default FAQs;
