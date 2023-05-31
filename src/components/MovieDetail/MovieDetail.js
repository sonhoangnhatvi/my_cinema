import { useCallback, useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import Modal from "../UI/Modal";
import classes from "./MovieDetail.module.css";
import { MOVIE_API_KEY } from "../../constants/api";

const MovieDetail = (props) => {
  // // use State for movie detail
  const [movieDetail, setMovieDetail] = useState({});

  const transformTasksMovies = (jsonResponse) => {
    console.log("jsonResponse.results", jsonResponse.results);
    console.log("props.movieDetail", props.movieDetail);
    const movieDetailResults = jsonResponse.results;
    if (movieDetailResults.length === 0) {
      setMovieDetail({
        id: props.movieDetail.id,
        original_title: "",
        overview: "",
        backdrop_path: "",
        poster_path: "",
        key: "",
        site: "",
        published_at: "0000-00-00",
        vote_average: "",
        type: "",
        typeOrd: 0,
      });
    } else {
      const loadedMovieDetailResults = [];
      for (const movie in movieDetailResults) {
        loadedMovieDetailResults.push({
          id: movieDetailResults[movie].id,
          original_title: props.movieDetail.original_title,
          overview: props.movieDetail.overview,
          backdrop_path: props.movieDetail.backdrop_path,
          poster_path: props.movieDetail.poster_path,
          key: movieDetailResults[movie].key,
          site: movieDetailResults[movie].site,
          published_at:
            movieDetailResults[movie].published_at === "" ||
            movieDetailResults[movie].published_at === null ||
            movieDetailResults[movie].published_at === undefined
              ? "0000-00-00"
              : movieDetailResults[movie].published_at.substr(0, 10),
          vote_average: props.movieDetail.vote_average,
          type: movieDetailResults[movie].type,
          typeOrd: movieDetailResults[movie].type === "Trailer" ? 1 : 2,
        });
      }

      const movieDetailGet = loadedMovieDetailResults
        .filter((movieDetail) => {
          return (
            (movieDetail.type === "Trailer" || movieDetail.type === "Teaser") &&
            movieDetail.site === "YouTube"
          );
        })
        .sort((a, b) => a.typeOrd - b.typeOrd);

      console.log("movieDetailGet", loadedMovieDetailResults);

      setMovieDetail(movieDetailGet[0]);
    }
  };

  // use Http for fetching data
  const { sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks(
      {
        url: `https://api.themoviedb.org/3/movie/${props.movieDetail.id}/videos?api_key=${MOVIE_API_KEY}`,
      },
      transformTasksMovies
    );
  }, [fetchTasks, props.movieDetail.id]);

  return (
    <Modal className={classes.movie_detail} onClose={props.onClose}>
      <div className={classes.movie_detail_container}>
        <div>
          <h1 className={classes.original_title}>
            {movieDetail.original_title}
          </h1>
          <div className={classes.subtitle}>
            <h3 className={classes.published_at}>
              Release Date: {movieDetail.published_at}
            </h3>
            <p className={classes.vote_average}>{movieDetail.vote_average}</p>
          </div>
          <p className={classes.overview}>{movieDetail.overview}</p>
        </div>
        <iframe
          title={movieDetail.original_title}
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${movieDetail.key}`}
        ></iframe>
      </div>
    </Modal>
  );
};

export default MovieDetail;
