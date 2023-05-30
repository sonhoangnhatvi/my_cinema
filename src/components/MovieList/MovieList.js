import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  // use State for movie list
  const [movieList, setMovieList] = useState([]);

  const transformTasksMovies = (jsonResponse) => {
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
    setMovieList(loadedMovie);
  };

  // use Http for fetching data
  const { sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks(
      {
        url: `${props.movieInfo.url}`,
      },
      transformTasksMovies
    );
  }, [fetchTasks, props.movieInfo]);

  const isOriginal = props.movieInfo.type === "Original" ? true : false;

  return (
    <div className={classes.movie_list_container}>
      <h3 className={classes.movie_list_title}>{props.movieInfo.title}</h3>
      <div className={classes.movie_list}>
        {movieList.map((movie) => {
          return (
            <img
              className={`${classes.movie_poster} ${classes.img_zoom}`}
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${
                isOriginal ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.original_name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
