import IDcard from "./IDcard";
import Data from "../Data.json";

function IDCards() {
  return (
    <>
      {Data.data.map((elm) => {
        return (
          <IDcard key={elm.id} name={elm.name} age={elm.age} des={elm.des} />
        );
      })}
    </>
  );
}

export default IDCards;
