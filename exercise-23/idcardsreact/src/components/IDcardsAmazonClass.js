import React from "react";
import IDcardAmazonClass from "./IDcardAmazonClass.js";
import amzdata from "../amzdata.json";

class IDcardsAmazonClass extends React.Component {
  render() {
    return amzdata.films.map((elm) => {
      console.log("elm: ", elm);
      return (
        <IDcardAmazonClass
          key={elm.FilmID}
          id={elm.FilmID}
          title={elm.Title}
          image={elm.Image}
        />
      );
    });
  }
}

export default IDcardsAmazonClass;
