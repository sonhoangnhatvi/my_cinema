import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import Modal from "../UI/Modal";
import classes from "./MovieDetail.module.css";
import { MOVIE_API_KEY } from "../../constants/api";

const MovieDetail = (props) => {
  // // use State for movie detail
  const [movieDetail, setMovieDetail] = useState({});

  const transformTasksMovies = (jsonResponse) => {
    console.log("jsonResponse.results", jsonResponse.results);
    //const
    // const movieList = jsonResponse.results;
    // const loadedMovie = [];
    // for (const movie in movieList) {
    //   loadedMovie.push({
    //     id: movieList[movie].id,
    //     original_name: movieList[movie].original_name,
    //     overview: movieList[movie].overview,
    //     backdrop_path: movieList[movie].backdrop_path,
    //     poster_path: movieList[movie].poster_path,
    //   });
    // }
    // setMovieList(loadedMovie);
  };

  // use Http for fetching data
  const { sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks(
      {
        url: `https://api.themoviedb.org/3/movie/${props.movieDetailId}/videos?api_key=${MOVIE_API_KEY}`,
      },
      transformTasksMovies
    );
  }, [fetchTasks, props.movieDetailId]);

  return (
    <Modal className={classes.movie_detail} onClose={props.onClose}>
      <h1 className={classes.movie_detail_title}>Movie Detail</h1>
    </Modal>
  );
};

export default MovieDetail;
