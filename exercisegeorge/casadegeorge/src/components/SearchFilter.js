import React from "react";
import { useNavigate } from "react-router-dom";

const SearchFilter = (props) => {
  let navigate = useNavigate();

  console.log("props from search filter: ", props);

  let arr = props.houses.map((elem) => elem.county);
  console.log("arr: ", arr);
  let distinctCounties = Array.from(new Set([...arr]));
  console.log(distinctCounties);

  let changeHander = (e) => {
    console.log("selected! " + e.target.value);
    navigate(`/searchresults/${e.target.value}`);
  };

  return (
    <React.Fragment>
      <select onChange={(e) => changeHander(e)}>
        <option key="select" value="select">
          Select
        </option>
        {distinctCounties.map((county) => (
          <option key={county} value={county}>
            {county}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default SearchFilter;
