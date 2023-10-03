import { useParams } from "react-router-dom";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = (props) => {
  console.log("from search results props: ", props);
  const paramsObj = useParams();
  console.log("paramsObj: ", paramsObj);

  console.log("county name: " + paramsObj.county);

  let filteredHousesArray = props.houses.filter(
    (elem) => elem.county == paramsObj.county
  );

  console.log(filteredHousesArray);

  return (
    <div className="row">
      <h4>Search results for houses in : {paramsObj.county} </h4>
      <div className="table-responsive">
        <table className="table table-primary table-hover">
          <thead>
            <tr>
              <th scope="col">Address</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredHousesArray.map((elem) => {
              return <SearchResultsRow house={elem} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
    // <h1>Search Results</h1>
  );
};

export default SearchResults;
