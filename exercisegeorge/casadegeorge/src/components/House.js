import React from "react";
const House = (props) => {
  console.log("props from House component: ", props);

  if (!props.houseinfo) {
    return <h1>Loading...</h1>;
  }

  return (
    <React.Fragment>
      <img className="img-fluid" src="/imgs/1.jpg"></img>
      <h1>Address</h1>
      {props.houseinfo.address}
      <h1>Price</h1>
      {props.houseinfo.price}
      <h1>Description</h1>
      {props.houseinfo.description}
    </React.Fragment>
  );
};

export default House;
