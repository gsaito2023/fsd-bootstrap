import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import House from "./components/House";
import SearchFilter from "./components/SearchFilter";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import SearchedHouse from "./components/SearchedHouse";
import SignUp from "./components/SignUp";

function App() {
  let [houseData, setHouseData] = useState([]);

  useEffect(() => {
    console.log("in useEffect");
    const fetchData = async () => {
      let resp = await fetch("/houses.json");
      let data = await resp.json();
      console.log(data);
      setHouseData(data);
    };
    fetchData();
  }, []);
  console.log("from setHouseData: ", houseData);
  return (
    <div className="container-fluid">
      <Header />
      <SearchFilter houses={houseData} />
      <Routes>
        <Route path="/" element={<House houseinfo={houseData} />} />
        <Route
          path="searchresults/:county"
          element={<SearchResults houses={houseData} />}
        />
        <Route
          path="searchedhouse/:id"
          element={<SearchedHouse houseinfo={houseData} />}
        />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
