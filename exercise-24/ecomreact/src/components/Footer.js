import { Link } from "react-router-dom";
import g_logo from "../images/g-logo.png";
import electronics_logo from "../images/g-electronics.png";

import facebook_icon from "../images/facebook_icon_white.svg";
import instagram_icon from "../images/instagram_logo_icon_white.svg";
import reddit_icon from "../images/reddit_logo_icon_white.svg";
import youtube_icon from "../images/youtube_logo_icon.svg";
import whatsapp_icon from "../images/whatsapp_logo_icon.svg";
import cc_logos from "../images/Credit-Card-Logos-high-resolution.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgb(94, 76, 118)" }}>
      <div className="row mx-5 pb-5 pt-3">
        <div className="col-6 col-md-2 mb-3 text-light px-3 py-2">
          <h3 className="pb-3">Your Stuff</h3>
          <div>
            <Link
              to="orderstatus"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Order Status
            </Link>
          </div>
          <div>
            <Link
              to="accountinfo"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Account Info
            </Link>
          </div>
          <div>
            <Link
              to="rewards"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Rewards
            </Link>
          </div>
          <div>
            <Link
              to="giftcards"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Gift Cards
            </Link>
          </div>
          <div>
            <Link
              to="paymentfinancing"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Payments & Financing
            </Link>
          </div>
        </div>

        <div className="col-6 col-md-2 mb-3 text-light px-3 py-2">
          <h3 className="pb-3">Get in Touch</h3>
          <div>
            <Link
              to="contactus"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Contact Us
            </Link>
          </div>
          <div>
            <Link
              to="custsupport"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Customer Support
            </Link>
          </div>
          <div>
            <Link
              to="international"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              International
            </Link>
          </div>
          <div>
            <Link
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              to="contactus#vist-store"
            >
              Visit a Store
            </Link>
          </div>
          <div>
            <Link
              to="careers"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Careers
            </Link>
          </div>
        </div>

        <div className="col-6 col-md-2 mb-3 text-light px-3 py-2">
          <h3 className="pb-3">Our Company</h3>
          <div>
            <Link
              to="aboutus"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              About Us
            </Link>
          </div>
          <div>
            <Link
              to="ourcompany"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Our Company
            </Link>
          </div>
          <div>
            <Link
              to="returns"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Returns
            </Link>
          </div>
          <div>
            <Link
              to="freeshipping"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Free Shipping
            </Link>
          </div>
          <div>
            <Link
              to="faqs"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              FAQs
            </Link>
          </div>
        </div>

        <div className="col-md-5 offset-md-1 mb-3" id="footer-logo">
          <div>
            <Link to="/">
              <img src={g_logo} width="100" alt="Small logo" />
              <img src={electronics_logo} width="200" alt="Large logo" />
            </Link>
          </div>
          <div className="pt-3 px-3">
            <img src={cc_logos} width="200" alt="Credit cards" />
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-2 px-2">
            <ul className="list-unstyled d-flex pt-2">
              <li className="px-2">
                <Link
                  to="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebook_icon} width="30" alt="Facebook" />
                </Link>
              </li>
              <li className="px-2">
                <Link
                  to="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagram_icon} width="30" alt="Instagram" />
                </Link>
              </li>
              <li className="px-2">
                <Link
                  to="https://www.reddit.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={reddit_icon} width="30" alt="Reddit" />
                </Link>
              </li>
              <li className="px-2">
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={youtube_icon} width="30" alt="YouTube" />
                </Link>
              </li>
              <li className="px-2">
                <Link
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={whatsapp_icon} width="30" alt="WhatsApp" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex text-light">
          <span className="pe-3">©2023 All rights reserved.</span>|
          <Link
            to="privacy"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-3"
          >
            Privacy Notice
          </Link>
          |
          <Link
            to="personalinfo"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-3"
          >
            Do not Sell or Share My Personal Information
          </Link>
          |
          <Link
            to="cookie"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-3"
          >
            Cookie Notice
          </Link>
          |
          <Link
            to="tos"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-3"
          >
            Terms of Service
          </Link>
          |
          <Link
            to="accessibility"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-3"
          >
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
