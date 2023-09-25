import { HashLink } from "react-router-hash-link";
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
            <a
              href="orderstatus"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Order Status
            </a>
          </div>
          <div>
            <a
              href="accountinfo"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Account Info
            </a>
          </div>
          <div>
            <a
              href="rewards"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Rewards
            </a>
          </div>
          <div>
            <a
              href="giftcards"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Gift Cards
            </a>
          </div>
          <div>
            <a
              href="paymentfinancing"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Payments & Financing
            </a>
          </div>
        </div>

        <div className="col-6 col-md-2 mb-3 text-light px-3 py-2">
          <h3 className="pb-3">Get in Touch</h3>
          <div>
            <a
              href="contactus"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Contact Us
            </a>
          </div>
          <div>
            <a
              href="custsupport"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Customer Support
            </a>
          </div>
          <div>
            <a
              href="international"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              International
            </a>
          </div>
          <div>
            <a href="contactus#vist-store" style={{ textDecoration: "none" }}>
              <HashLink
                className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                to={"/contactus#vist-store"}
              >
                Visit a Store
              </HashLink>
            </a>
          </div>
          <div>
            <a
              href="careers"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Careers
            </a>
          </div>
        </div>

        <div className="col-6 col-md-2 mb-3 text-light px-3 py-2">
          <h3 className="pb-3">Our Company</h3>
          <div>
            <a
              href="aboutus"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              About Us
            </a>
          </div>
          <div>
            <a
              href="ourcompany"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Our Company
            </a>
          </div>
          <div>
            <a
              href="returns"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Returns
            </a>
          </div>
          <div>
            <a
              href="freeshipping"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Free Shipping
            </a>
          </div>
          <div>
            <a
              href="faqs"
              className="p-0 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              FAQs
            </a>
          </div>
        </div>

        <div className="col-md-5 offset-md-1 mb-3" id="footer-logo">
          <div>
            <a href="/">
              <img src={g_logo} width="100" alt="Small logo" />
              <img src={electronics_logo} width="200" alt="Large logo" />
            </a>
          </div>
          <div className="pt-3 px-3">
            <img src={cc_logos} width="200" alt="Credit cards" />
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-2 px-2">
            <ul className="list-unstyled d-flex pt-2">
              <li className="px-2">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebook_icon} width="30" alt="Facebook" />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagram_icon} width="30" alt="Instagram" />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.reddit.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={reddit_icon} width="30" alt="Reddit" />
                </a>
              </li>
              <li className="px-2">
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <img src={youtube_icon} width="30" alt="YouTube" />
                </a>
              </li>
              <li className="px-2">
                <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                  <img src={whatsapp_icon} width="30" alt="WhatsApp" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex text-light">
          <span className="pe-3">©2023 All rights reserved.</span>|
          <a
            href="privacy"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-3"
          >
            Privacy Notice
          </a>
          |
          <a
            href="personalinfo"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-3"
          >
            Do not Sell or Share My Personal Information
          </a>
          |
          <a
            href="cookie"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-3"
          >
            Cookie Notice
          </a>
          |
          <a
            href="tos"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-3"
          >
            Terms of Service
          </a>
          |
          <a
            href="accessibility"
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-3"
          >
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
