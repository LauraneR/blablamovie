import React from 'react';
import PropTypes from 'prop-types';

const Movie = props => (
  <figure id={props.imdbID} onClick={(e) => props.getMovieDetails(e, props.imdbID)} className={"relative pt-5 sm:pt-40 cursor-pointer hover:text-indigo-600" + (props.odd ? " -mt-24 sm:-mt-32" : "")}>
    <button onClick={(e) => props.isLikeOrNot(e, props.imdbID)} className={"z-10 focus:outline-none absolute right-2 top-2 sm:right-4 sm:top-4 border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white py-2 px-2 rounded-md text-sm font-medium inline-flex items-center" + (props.currentLike.indexOf(props.imdbID) > -1 ? " bg-indigo-700 text-white" : " text-indigo-700 bg-white")}>
      <span className="hidden sm:block sm:mr-1">I like it</span>
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill={(props.currentLike.indexOf(props.imdbID) > -1 ? "white" : "none")} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>
    <div className="relative bg-indigo-100 hidden sm:block h-48 md:h-72"></div>
    <img className="m-auto sm:absolute max-h-72 md:max-h-96 sm:top-0 sm:left-1/2 sm:transform sm:-translate-x-2/4" alt={props.Title} src={(props.Poster !== "N/A" ? props.Poster : "https://dummyimage.com/300x450/b8b8b8/fff.jpg&text=No+image+found")} />
    <h2 className="font-bold relative font-serif text-xl mt-2 mb-0 sm:text-3xl">{props.Title}</h2>
  </figure>
);

Movie.propTypes = {
  imdbID: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Poster: PropTypes.string,
  odd: PropTypes.bool.isRequired,
  currentLike: PropTypes.array.isRequired,
  isLikeOrNot: PropTypes.func.isRequired,
};

export default Movie;
