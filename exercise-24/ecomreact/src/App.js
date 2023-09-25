import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Cameras from "./components/Cameras";
import ComingSoon from "./components/ComingSoon";
import StartChat from "./components/StartChat";
import FormSubmit from "./components/FormSubmit";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="faqs" element={<FAQs />} />
        <Route
          path="orderstatus"
          element={<ComingSoon page="Order Status" />}
        />
        <Route
          path="accountinfo"
          element={<ComingSoon page="Account Info" />}
        />
        <Route path="rewards" element={<ComingSoon page="Rewards" />} />
        <Route path="giftcards" element={<ComingSoon page="Gift Cards" />} />
        <Route
          path="paymentfinancing"
          element={<ComingSoon page="Payment & Financing" />}
        />
        <Route
          path="custsupport"
          element={<ComingSoon page="Customer Support" />}
        />
        <Route
          path="international"
          element={<ComingSoon page="International" />}
        />
        <Route path="careers" element={<ComingSoon page="Careers" />} />
        <Route path="ourcompany" element={<ComingSoon page="Our Company" />} />
        <Route path="returns" element={<ComingSoon page="Returns" />} />
        <Route
          path="freeshipping"
          element={<ComingSoon page="Free Shipping" />}
        />
        <Route path="privacy" element={<ComingSoon page="Privacy" />} />
        <Route
          path="personalinfo"
          element={
            <ComingSoon page="Do not Sell or Share My Personal Information" />
          }
        />
        <Route path="cookie" element={<ComingSoon page="Cookie Notice" />} />
        <Route path="tos" element={<ComingSoon page="Terms of Service" />} />
        <Route
          path="accessibility"
          element={<ComingSoon page="Accessibility" />}
        />
        <Route path="favorites" element={<ComingSoon page="Favorites" />} />
        <Route path="cart" element={<ComingSoon page="Cart" />} />
        <Route path="search" element={<ComingSoon page="Search" />} />
        <Route path="cameras" element={<Cameras />} />
        <Route path="computers" element={<ComingSoon page="Computers" />} />
        <Route path="tvs" element={<ComingSoon page="TVs" />} />
        <Route
          path="provideo"
          element={<ComingSoon page="Professional Video" />}
        />
        <Route path="mobile" element={<ComingSoon page="Mobile" />} />
        <Route path="proaudio" element={<ComingSoon page="Pro Audio" />} />
        <Route
          path="photoaccessories"
          element={<ComingSoon page="Photo Accessories" />}
        />
        <Route
          path="dronescamcorders"
          element={<ComingSoon page="Drones & Camcorders" />}
        />
        <Route path="lighting" element={<ComingSoon page="Lighting" />} />
        <Route
          path="audiovisual"
          element={<ComingSoon page="Audio Visual" />}
        />
        <Route
          path="surveillance"
          element={<ComingSoon page="Surveillance" />}
        />
        <Route path="optics" element={<ComingSoon page="Optics" />} />
        <Route
          path="productdetails"
          element={<ComingSoon page="Product Details" />}
        />
        <Route path="login" element={<ComingSoon page="Login" />} />
        <Route path="signup" element={<ComingSoon page="Sign Up" />} />
        <Route path="startchat" element={<StartChat />} />
        <Route path="formsubmit" element={<FormSubmit />} />
        <Route path="reviews" element={<ComingSoon page="Reviews" />} />
        <Route path="comingsoon" element={<ComingSoon />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <ComingSoon page="Cameras" /> */}
      <Footer />
    </div>
  );
}

export default App;
