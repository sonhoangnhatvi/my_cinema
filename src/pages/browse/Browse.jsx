import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import useHttp from "../../hooks/use-http";
import { MOVIE_API_KEY, fetchActionMovies } from "../../constants/api";
import Banner from "../../components/Banner/Banner";
import MovieList from "../../components/MovieList/MovieList";

function Browse() {
  // use State for movie list
  const [movieListOriginals, setMovieListOriginals] = useState([]);
  const [movieForBanner, setMovieForBanner] = useState({});

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
    setMovieListOriginals(loadedMovie);
    setMovieForBanner(
      loadedMovie[Math.floor(Math.random() * loadedMovie.length - 1)]
    );

    console.log("movieList", movieListOriginals);
  };

  // TMDB API Key : 011ddc01dd093d9988cf1b87c378aece
  // API : https://api.themoviedb.org/3/movie/550?api_key=<Token>
  // API : https://api.themoviedb.org/3/movie/550?api_key=011ddc01dd093d9988cf1b87c378aece

  //const API_KEY = process.env.MOVIE_API_KEY;
  const API_KEY = MOVIE_API_KEY;

  //console.log("API_KEY", MOVIE_API_KEY);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const requests = {
      fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
      fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
      fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
      fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
      fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
      fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
      fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
      fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
      fetchMovie: `/movie/550?api_key=${API_KEY}&language=en-US`,
    };

    fetchTasks(
      {
        url: `https://api.themoviedb.org/3${requests.fetchTrending}`,
      },
      transformTasksMovies
    );
  }, [fetchTasks]);

  return (
    <div className="app">
      <Banner movieForBanner={movieForBanner} />
      <Navbar />
      {/* <MovieList api_endpoint={re} /> */}
      {/* <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList /> */}
    </div>
  );
}

export default Browse;
