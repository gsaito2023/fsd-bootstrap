let data = {
  accordion: [
    {
      name: "flush-collapseOne",
      title: "Why is there a price difference between stores?",
      text: "Prices may vary from store to store because each store is required to manage its own inventory. Therefore, a manager may lower a price to clear out an overstock item, to reward customers with an in-store sale, or to compete with local merchants. It is not our policy to price match our own stores since we are not in competition with ourselves. If you would like more information on pricing policy, you may contact your local store management.",
    },
    {
      name: "flush-collapseTwo",
      title: "Where can I use my store gift card?",
      text: "Physical (tangible) cards with a PIN (personal identification number) may be used in any United States or Puerto Rico store.",
    },
    {
      name: "flush-collapseThree",
      title: "How long does my order take to ship?",
      text: "Our General turn around time to ship an order is 24 houses after its placed.",
    },
    {
      name: "flush-collapseFour",
      title: "How can I check on the status of my order?",
      text: "Click on the Sign In link at the top right corner of the website. Enter your account information into the fields of the popdown box and click Submit You will then be redirected to the homepage. Once there, click the My Account link at the top of the site. Once at the My Account page, click the Order Status link.",
    },
    {
      name: "flush-collapseFive",
      title:
        "I entered the wrong address, or my address was incomplete when I placed my order, what can I do to have the ship to address corrected?",
      text: "We are unable to modify any order once it has been placed and handed to our warehouse for shipment, Please give us a call so we may contact the carrier, in Example FedEx or UPS and request a Reroute, Package Intercept or Address correction. A Reroute fee or address correction fee will be charged to have the address changed on the FedEx or UPS Label as well as additional shipping cost.",
    },
  ],
};
let AccordionComponent = (props) => {
  let targetName = "#" + props.name;
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={targetName}
          aria-expanded="false"
          aria-controls={props.name}
        >
          {props.title}
        </button>
      </h2>
      <div
        id={props.name}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">{props.text}</div>
      </div>
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AccordionComponent {...data.accordion[0]} />
    <AccordionComponent {...data.accordion[1]} />
    <AccordionComponent {...data.accordion[2]} />
    <AccordionComponent {...data.accordion[3]} />
    <AccordionComponent {...data.accordion[4]} />
  </>
);
