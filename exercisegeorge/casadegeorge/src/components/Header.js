// import logo from "/imgs/logo.png";
import React from "react";
const Header = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 bg-warning">
            <p>Header</p>
            <img src="/imgs/logo.png"></img>
          </div>
          <div className="col-6 bg-primary">
            <button className="btn btn-info m-3">Login</button>
            <button className="btn btn-success m-3">Sign Up</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
