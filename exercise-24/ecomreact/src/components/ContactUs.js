import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import mail_icon from "../images/mail_black.svg";
import call_icon from "../images/phone_icon_black.svg";
import chat_icon from "../images/chat_icon_black.svg";
import store_icon from "../images/front_store_icon_black.svg";

const ContactUs = () => {
  let navigate = useNavigate();

  const startChatRouteChange = () => {
    navigate("/startchat");
    window.scrollTo(0, 0);
  };

  const formSubmitRouteChange = () => {
    navigate("/formsubmit");
    window.scrollTo(0, 0);
  };
  return (
    <div className="container-fluid" id="content">
      <nav className="breadcrumb">
        <Link className="breadcrumb-item" to="/">
          Home
        </Link>
        <span className="breadcrumb-item active" aria-current="page">
          Contact Us
        </span>
      </nav>

      <div className="d-inline-flex flex-row align-items-center">
        <div>
          <img
            src={mail_icon}
            width="70"
            className="p-0 m-0"
            alt="Contact us"
            style={{ opacity: "50%" }}
          />
        </div>
        <div>
          <span className="text-secondary p-0 m-0 display-5">Contact Us</span>
        </div>
      </div>

      <h1 className="display-3 text-center py-5">HOW CAN WE HELP?</h1>

      <div className="container">
        <div className="display-1 d-flex align-items-center" id="call-headline">
          <img src={call_icon} width="70" alt="Call us" />
          Call
        </div>

        <div className="display-5 text-center py-2">(800) 123-6789</div>
        <div className="display-10 text-center py-2">
          <b>Hours of operation:</b> Monday - Friday 6AM - 6PM EST
        </div>
        <div className="display-1 d-flex align-items-center" id="chat-headline">
          <img src={chat_icon} width="70" alt="Live Chat" />
          Live Chat
        </div>
        <div className="text-center py-2 live-chat-button">
          <button className="btn p-3" onClick={startChatRouteChange}>
            Start Chat
          </button>
        </div>
        <div className="display-10 text-center py-2">
          <b>Hours of operation:</b> Monday - Sunday 6AM - 10PM EST
        </div>

        <div id="contact-section">
          <div
            className="display-1 d-flex align-items-center"
            id="form-headline"
          >
            <img src={mail_icon} width="70" alt="Form" />
            Form
          </div>
          <h5>
            Don't wait on hold waiting for a customer service representative.
            Leave a message and we'll get to you as soon as possible.
          </h5>
        </div>

        <div className="py-3">
          <div className="mb-3 border border-1 shadow p-3 mb-5 bg-body-tertiary rounded">
            <div id="full-name">
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Full name"
              />
            </div>
            <div className="py-2">
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Email"
              />
            </div>
            <div className="py-2">
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Subject"
              />
            </div>
            <div className="py-3">
              <label className="ps-1">
                <h6>Give us details about your request:</h6>
              </label>
              <textarea
                className="form-control"
                name=""
                id=""
                rows="10"
              ></textarea>
            </div>
            <div className="py-3 send-message-submit">
              <button
                type="submit"
                className="btn p-3"
                onClick={formSubmitRouteChange}
              >
                Send message
              </button>
            </div>
          </div>
        </div>
        <span id="vist-store" className="target"></span>
        <div
          className="display-1 d-flex align-items-center"
          id="visit-store-headline"
        >
          <img src={store_icon} width="70" alt="Visit us" />
          Visit us at a store near you
        </div>

        <div className="display-6">New York, NY</div>
        <div>0000 Broadway, New York, NY 10036</div>
        <div>(212) 000-0000</div>

        <div className="py-3">
          <div className="display-6">Mountain View, CA</div>
          <div>000 Amphitheatre Parkway, Mountain View, CA 94043</div>
          (650) 000-0000
        </div>

        <div className="py-3">
          <div className="display-6">Taipei, Taiwan</div>
          <div>
            No. 000, Section 0, Zhongxiao E Rd, Da’an District, Taipei City,
            Taiwan 000
          </div>
          <div>+000 0 0000 0000</div>
        </div>
        <div className="py-3">
          <div className="display-6">Tokyo, Japan</div>
          <div>0 Chome-00-00 Aobadai, Meguro City, Tokyo 000-0000, Japan</div>
          <div>+00 0-0000-0000</div>
        </div>
      </div>

      <h1 className="display-4 text-center" id="thank-you">
        Thank you for choosing us for your electronic needs.
      </h1>
    </div>
  );
};

export default ContactUs;
