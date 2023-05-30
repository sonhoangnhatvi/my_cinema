import { useEffect, useState } from "react";
import SearchIcon from "../Navbar/SearchIcon";
import classes from "./SearchForm.module.css";
import useHttp from "../../hooks/use-http";
import { MOVIE_API_KEY } from "../../constants/api";

const SearchForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [loadedSearchMovie, setLoadedSearchMovie] = useState([]);

  const transformTasksMovies = (jsonResponse) => {
    console.log("jsonResponse", jsonResponse);
    const movieList = jsonResponse.results;
    const loadedMovie = [];
    for (const movie in movieList) {
      loadedMovie.push({
        id: movieList[movie].id,
        original_name: movieList[movie].original_name,
        overview: movieList[movie].overview,
        backdrop_path: movieList[movie].backdrop_path,
        poster_path: movieList[movie].poster_path,
      });
    }
    setLoadedSearchMovie(loadedMovie);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.sendDataToSearchPage(loadedSearchMovie);
  };

  const handleBtnReset = () => {
    props.sendDataToSearchPage([]);
    setInputValue("");
  };

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      fetchTasks(
        {
          url: `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=en-US&query=${inputValue}`,
        },
        transformTasksMovies
      );
    }, 1000);

    return () => {
      clearTimeout(typingTimer);
    };
  }, [fetchTasks, inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className={classes.search_form_container} onSubmit={handleFormSubmit}>
      <div className={classes.search_form}>
        <div className={classes.search_area}>
          <input
            className={classes.input}
            onChange={handleInputChange}
            value={inputValue}
          ></input>
          <SearchIcon type="search_form" />
        </div>
        <div className={classes.button_area}>
          <button className={classes.btn_reset} onClick={handleBtnReset}>
            RESET
          </button>
          <button type="submit" className={classes.btn_search}>
            SEARCH
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
