import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = props => (
  <div className="fixed w-full h-full bottom-0 left-0 z-50 flex flex-col items-start pt-30vh sm:pt-40vh pb-5vh sm:pb-10vh pl-10vw sm:pr-30vw lg:pr-50vw bg-white">
    <div className="fixed bg-indigo-100 w-full left-0 h-70vh top-30vh sm:top-40vh sm:h-60vh"></div>
    <img className="animate-fadeIn m-auto absolute top-5vh right-4 h-80 sm:top-30vh sm:left-70vw lg:left-50vw sm:h-auto" alt={props.Title} src={(props.Poster !== "N/A" ? props.Poster : "https://dummyimage.com/300x450/b8b8b8/fff.jpg&text=No+image+found")} />
    <h2 className="animate-fadeIn -mt-7 sm:-mt-9 mb-0 font-bold relative font-serif text-xl mt-2 mb-0 sm:text-4xl bg-white pr-2 sm:bg-transparent">{props.Title}</h2>
    <h3 className="animate-fadeIn relative uppercase tracking-wider font-bold mb-10 bg-indigo-100 pr-2 pb-1">{props.Director}</h3>
    <p className="animate-fadeIn relative text-sm sm:text-lg font-bold max-w-3/4 bg-indigo-100 mb-5 pr-2 pt-1">{props.Plot}</p>
    <ul className="animate-fadeIn relative text-sm sm:text-lg bg-indigo-100 pr-2 mb-4">
      <li>Actors : {props.Actors}</li>
      <li>Genre : {props.Genre}</li>
      <li>Released : {props.Released}</li>
      <li>Rating IMDB : {props.imdbRating}/10</li>
    </ul>
    <button onClick={(e) => props.isLikeOrNot(e, props.imdbID)} className={"animate-fadeIn z-10 focus:outline-none sm:right-4 sm:top-4 border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white py-2 px-2 rounded-md text-md font-medium inline-flex items-center" + (props.currentLike.indexOf(props.imdbID) > -1 ? " bg-indigo-700 text-white" : " text-indigo-700")}>
      <span className="hidden sm:block sm:mr-1">I like it</span>
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill={(props.currentLike.indexOf(props.imdbID) > -1 ? "white" : "none")} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>
    <button onClick={(e) => props.closeMovieDetails(e)} className="bg-white absolute top-0 right-0 p-5 text-sm font-medium inline-flex items-center">
      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);

MovieDetails.propTypes = {
  imdbID: PropTypes.string.isRequired,
  Title: PropTypes.string,
  Poster: PropTypes.string,
  Director: PropTypes.string,
  Plot: PropTypes.string,
  Actors: PropTypes.string,
  Genre: PropTypes.string,
  Released: PropTypes.string,
  imdbRating: PropTypes.string,
  currentLike: PropTypes.array.isRequired,
  isLikeOrNot: PropTypes.func.isRequired,
  closeMovieDetails: PropTypes.func.isRequired,
};

export default MovieDetails;
