import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";

const MovieList = ({ props }) => {
  // use State for movie list
  //   const [movieList, setMovieList] = useState([]);

  //   const transformTasksMovies = (jsonResponse) => {
  //     console.log("jsonResponse", jsonResponse);
  //     const movieList = jsonResponse.results;
  //     const loadedMovie = [];
  //     for (const movie in movieList) {
  //       loadedMovie.push({
  //         id: movieList[movie].id,
  //         original_name: movieList[movie].original_name,
  //         overview: movieList[movie].overview,
  //         backdrop_path: movieList[movie].backdrop_path,
  //         poster_path: movieList[movie].poster_path,
  //       });
  //     }
  //     setMovieListOriginals(loadedMovie);
  //     setMovieForBanner(
  //       loadedMovie[Math.floor(Math.random() * loadedMovie.length - 1)]
  //     );

  //     console.log("movieList", movieListOriginals);
  //   };

  //     // use Http for fetching data

  //     useEffect(() => {
  //         const requests = {
  //           fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  //           fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  //           fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  //           fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  //           fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  //           fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  //           fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  //           fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  //           fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
  //           fetchMovie: `/movie/550?api_key=${API_KEY}&language=en-US`,
  //         };

  //         fetchTasks(
  //           {
  //             url: `https://api.themoviedb.org/3${requests.fetchTrending}`,
  //           },
  //           transformTasksMovies
  //         );
  //       }, [fetchTasks]);

  return <div></div>;
};

export default MovieList;
