const DigiNav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary sticky-top">
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div className="collapse navbar-collapse px-3" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Top
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#summary">
              Summary
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#expertise">
              Expertise
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#professional-experience">
              Professional Experience
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#accomplishments">
              Accomplishments
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#projectresults">
              Project Results
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#technology-summary">
              Technology Summary
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#education">
              Education
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#certifications">
              Certifications
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contactme">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DigiNav;
