import React from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';
import MovieDetails from './MovieDetails';

const MovieList = props => {
  if(props.response !== "True"){
    return (
      <div className="max-w-screen-lg m-auto mt-40 mb-28 px-1 sm:px-4">
        <p>{props.error}</p>
      </div>
    )
  } else {
    return (
      <>
        <ul className="grid grid-cols-2 max-w-screen-lg m-auto mt-40 mb-28 px-1 sm:px-4">
          {props.movies.map((movie, i) => (
            <li className="px-4 lg:px-16 mb-24 sm:mb-40" key={movie.imdbID}>
              <Movie {...movie} odd={i % 2 ? false : true} currentLike={props.currentLike} isLikeOrNot={props.isLikeOrNot} getMovieDetails={props.getMovieDetails}/>
            </li>
          ))}
        </ul>
        {Object.keys(props.movieDetails).length !== 0 && (
          <MovieDetails {...props.movieDetails} currentLike={props.currentLike} isLikeOrNot={props.isLikeOrNot} closeMovieDetails={props.closeMovieDetails} />
        )}
        {props.itsNotAGoodChoice && (
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" onClick={(e) => props.closeModal(e)}>
            <div class="opacity-75 fixed inset-0 z-40 bg-black"></div>
            <div className="z-50 relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                 <p className="my-4 text-gray-600 text-lg leading-relaxed">{props.itsNotAGoodChoice}</p>
               </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

}

MovieList.propTypes = {
  movies: PropTypes.array,
  response: PropTypes.string.isRequired,
  error: PropTypes.string,
  currentLike: PropTypes.array.isRequired,
  isLikeOrNot: PropTypes.func.isRequired,
  movieDetails: PropTypes.object,
  getMovieDetails: PropTypes.func.isRequired,
  closeMovieDetails: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  itsNotAGoodChoice: PropTypes.string,
};

export default MovieList;
