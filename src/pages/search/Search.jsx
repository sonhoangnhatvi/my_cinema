import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./Search.module.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import useHttp from "../../hooks/use-http";
import ResultList from "../../components/ResultList/ResultList";

const Search = () => {
  const [movieSearchList, setMovieSearchList] = useState([]);

  const handleDataFromSearchForm = (data) => {
    console.log("data", data);
    setMovieSearchList(data);
  };

  return (
    <div className={classes.app}>
      <Navbar />
      <SearchForm sendDataToSearchPage={handleDataFromSearchForm}></SearchForm>
      <ResultList movieList={movieSearchList}></ResultList>
    </div>
  );
};

export default Search;
