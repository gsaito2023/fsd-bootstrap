import House from "./House";
import { useParams } from "react-router-dom";

const SearchedHouse = (props) => {
  console.log("From SearchedHouse!");

  let paramsObj = useParams();

  console.log("paramsObj from searched house: ", paramsObj);

  console.log("props from searchedHouse: ", props.houseinfo);

  let searchedHouseObjArray = props.houseinfo.filter(
    (house) => house._id == paramsObj.id
  );

  console.log("searchedHouseObj: ", searchedHouseObjArray[0]);

  return (
    <div>
      <h1>Hello world</h1>
      <House houseinfo={searchedHouseObjArray[0]} />
    </div>
  );
};

export default SearchedHouse;
