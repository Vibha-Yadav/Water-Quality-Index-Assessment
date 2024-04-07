import React from "react";
import SearchBar from "../components/searchbar/Searchbar";
import DashboardMap from "../components/DashboardMap";

export const Home = ({user, setUser, setLoader}) => {
  return (
    <>
      <SearchBar user={user} setUser={setUser} setLoader={setLoader} />
      <DashboardMap />
    </>
  );
};
