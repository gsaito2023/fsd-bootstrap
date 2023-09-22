import React from "react";

class IDcardAmazonClass extends React.Component {
  render() {
    return (
      <div className="card w-25 float-start mx-1 my-1">
        <div className="card-body bg-danger">
          <div className="card-title bg-info text-center">
            <img src={this.props.image} style={{ height: "300px" }} />
          </div>
          <p className="card-text fw-bold text-light ps-1">
            Title: {this.props.title}
          </p>
          <p className="card-text fw-bold text-light ps-1">
            ID: {this.props.id}
          </p>
        </div>
      </div>
    );
  }
}

export default IDcardAmazonClass;
