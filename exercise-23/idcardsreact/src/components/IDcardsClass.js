import React from "react";
import Data from "../Data.json";
import IDcardClass from "./IDcardClass";

class IDcardsClass extends React.Component {
  render() {
    return (
      <>
        {Data.data.map((elm) => {
          return (
            <IDcardClass
              key={elm.id}
              name={elm.name}
              age={elm.age}
              des={elm.des}
            />
          );
        })}
      </>
    );
  }
}
export default IDcardsClass;
