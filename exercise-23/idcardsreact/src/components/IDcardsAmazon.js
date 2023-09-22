import IDcardAmazon from "./IDcardAmazon";
import amzdata from "../amzdata.json";

const IDcardsAmazon = () => {
  return amzdata.films.map((elm) => {
    return (
      <IDcardAmazon
        key={elm.FilmID}
        id={elm.FilmID}
        title={elm.Title}
        image={elm.Image}
      />
    );
  });
};

export default IDcardsAmazon;
