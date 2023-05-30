import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";

const MovieDetail = (props) => {
  // use State for movie detail
  const [movieDetail, setMovieDetail] = useState({});

  const transformTasksMovies = (jsonResponse) => {
    console.log("jsonResponse", jsonResponse);
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
        url: `${props.movieInfo.url}`,
      },
      transformTasksMovies
    );
  }, [fetchTasks, props.movieInfo]);

  return (
    <div>
      <h1>Movie Detail</h1>
    </div>
  );
};

export default MovieDetail;
