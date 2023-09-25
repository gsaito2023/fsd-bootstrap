import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import OrderStatus from "./components/OrderStatus";
import AccountInfo from "./components/AccountInfo";
import Rewards from "./components/Rewards";
import GiftCards from "./components/GiftCards";
import PaymentFinancing from "./components/PaymentFinancing";
import CustomerSupport from "./components/CustomerSupport";
import International from "./components/International";
import Careers from "./components/Careers";
import OurCompany from "./components/OurCompany";
import Returns from "./components/Returns";
import FreeShipping from "./components/FreeShipping";
import Privacy from "./components/Privacy";
import PersonalInfo from "./components/PersonalInfo";
import Cookie from "./components/Cookie";
import TOS from "./components/TOS";
import Accessibility from "./components/Accessibility";
import Favorites from "./components/Favorites";
import Cart from "./components/Cart";
import Search from "./components/Search";
import Computers from "./components/Computers";
import TVs from "./components/TVs";
import ProVideo from "./components/ProVideo";
import Mobile from "./components/Mobile";
import ProAudio from "./components/ProAudio";
import PhotoAcc from "./components/PhotoAcc";
import DronesCamcorders from "./components/DronesCamcorders";
import Lighting from "./components/Lighting";
import AudioVisual from "./components/AudioVisual";
import Surveillance from "./components/Surveillance";
import Optics from "./components/Optics";
import Cameras from "./components/Cameras";
import ComingSoon from "./components/ComingSoon";
import SignUp from "./components/SignUp";
import PDP from "./components/PDP";
import Reviews from "./components/Reviews";
import Login from "./components/Login";
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
        <Route path="orderstatus" element={<OrderStatus />} />
        <Route path="accountinfo" element={<AccountInfo />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="giftcards" element={<GiftCards />} />
        <Route path="paymentfinancing" element={<PaymentFinancing />} />
        <Route path="custsupport" element={<CustomerSupport />} />
        <Route path="international" element={<International />} />
        <Route path="careers" element={<Careers />} />
        <Route path="ourcompany" element={<OurCompany />} />
        <Route path="returns" element={<Returns />} />
        <Route path="freeshipping" element={<FreeShipping />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="personalinfo" element={<PersonalInfo />} />
        <Route path="cookie" element={<Cookie />} />
        <Route path="tos" element={<TOS />} />
        <Route path="accessibility" element={<Accessibility />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="cart" element={<Cart />} />
        <Route path="search" element={<Search />} />
        <Route path="cameras" element={<Cameras />} />
        <Route path="computers" element={<Computers />} />
        <Route path="tvs" element={<TVs />} />
        <Route path="provideo" element={<ProVideo />} />
        <Route path="mobile" element={<Mobile />} />
        <Route path="proaudio" element={<ProAudio />} />
        <Route path="photoaccessories" element={<PhotoAcc />} />
        <Route path="dronescamcorders" element={<DronesCamcorders />} />
        <Route path="lighting" element={<Lighting />} />
        <Route path="audiovisual" element={<AudioVisual />} />
        <Route path="surveillance" element={<Surveillance />} />
        <Route path="optics" element={<Optics />} />
        <Route path="productdetails" element={<PDP />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="startchat" element={<StartChat />} />
        <Route path="formsubmit" element={<FormSubmit />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="comingsoon" element={<ComingSoon />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
