import React from "react";

class IDcardClass extends React.Component {
  render() {
    return (
      <>
        <div className="card w-25 float-start mx-1 my-1">
          <div className="card-body bg-danger">
            <h4 className="card-title bg-info">{this.props.name}</h4>
            <p className="card-text">{this.props.des + " " + this.props.age}</p>
          </div>
        </div>
      </>
    );
  }
}

export default IDcardClass;
