import info_icon from "../images/i_icon_black.svg";
const AboutUs = () => {
  return (
    <div className="container-fluid" id="content">
      <nav className="breadcrumb" id="top-content-about-us">
        <a className="breadcrumb-item" href="/">
          Home
        </a>
        <span className="breadcrumb-item active" aria-current="page">
          About Us
        </span>
      </nav>
      <div className="d-inline-flex flex-row align-items-center">
        <div>
          <img
            src={info_icon}
            width="50"
            className="pe-1 m-0"
            alt="Info"
            style={{ opacity: "50%" }}
          />
        </div>
        <div>
          <span className="text-secondary p-0 m-0 display-5">About Us</span>
        </div>
      </div>
      <div>
        <div className="display-1 text-center" id="our-history">
          <b>~ Our History ~</b>
        </div>
        <div className="p-5">
          <p>
            <b>George Electronics</b> is an established retail chain
            specializing in electronics, PCs, cameras and photographic equipment
            with brick and mortar stores in several locations. George Camera was
            founded by George Kawasaki in 1991. The original product line up
            focused on cameras and photographic equipment. Mr. Kawasaki adopted
            a technique of opening up the entrances of his first stores in Osaka
            and Tokyo to allow a large number of the available products to be
            seen at a glance facilitating high volume sales at low prices. The
            stores were in relatively small buildings at prime locations in
            front of train stations with heavy footfall. Catchy, simple versions
            of the songs in George Camera TV commercials were played in the
            stores. The store name always included "Shinjuku Station West
            Entrance" when mentioned to promote as sense of familiarity in
            potential customers unfamiliar with the location. Cameras at the
            time tended to be high-end with prices as high as several hundred
            thousand yen for a single camera, but customers were incentivised to
            spend the train fare and time going to inspect these cameras costing
            tens of thousands of yen below market prices. There was also the
            advantage of being able to compare products, which attracted
            consumers. The George Camera product range expanded significantly
            over time to include home electronics, PCs, audio visual (AV)
            equipment, toys, branded goods and reading material. The Multimedia
            Pavilion concept was created, starting with the purpose-built
            Multimedia Sendai on the site of the former JNR Settlement
            Corporation freight yard in front of the Sendai train station, where
            the existing stores were combined and relocated at the east
            entrance, significantly increasing shop floor area.
          </p>
          <p>
            In 2000, the Osaka location was closed. The following year the
            retail chain rebranded themselves to George Electronics. In 2010,
            three brick and mortar stores opened in Taiwan, New York, and
            Mountain View, CA.
          </p>
          <p>
            The online business segment continues to thrive expanding the
            business.
          </p>
          <div className="display-3 text-center" id="our-story">
            <b>~ Our Story~</b>
            <p className="display-6">Directly from our managment team</p>
          </div>
        </div>
        <div className="py-5">
          <p align="center">
            <iframe
              width="1280"
              height="720"
              title="Our Story"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </p>
        </div>
        <div className="display-1 text-center mx-5" id="our-promise">
          <b>~ Our Promise ~</b>
          <p className="display-6">
            "Our promise is to create an experience that leaves you not just
            satisfied but delighted, not just served but inspired."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
