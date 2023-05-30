import classes from "./ResultList.module.css";

const ResultList = (props) => {
  console.log("props.movieList", props.movieList);
  return (
    <div>
      {props.movieList.map((movie) => {
        return (
          <img
            className={`${classes.movie_poster} ${classes.img_zoom}`}
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.original_name}
          />
        );
      })}
    </div>
  );
};

export default ResultList;
