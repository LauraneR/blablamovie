import React, { Component } from 'react'
import Header from './Header'
import SearchForm from './SearchForm'
import MovieList from './MovieList'

const NOTGOODCHOICE = [
  "Sorry, not to say that you have bad taste in movie, but maybe choice another one ?",
  "Again not really a good movie, maybe look at next week winner ! That's really good movies ! ;)",
  "Like micheal showing his movie to Holly I will say 'Um, which part?'"]
const GOODCHOICE = ["tt2278388","tt0347149","tt2397535"]

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      query: '',
      response: 'False',
      error: '',
      currentLike: [],
      movieDetails: {},
      itsNotAGoodChoice: '',
    };

    this.onInput = this.onInput.bind(this);
    this.isLikeOrNot = this.isLikeOrNot.bind(this);
    this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  /***
    Query: value of input search (text)
    Trigger the search
  ***/
  onInput(query) {
    this.setState({
      query
    });

    this.searchMovie(query);
  }

  /***
    Search the movie when you write in the search (text) input with the api
  ***/
  searchMovie(query) {
    const API_KEY = process.env.REACT_APP_OMDBAPI_KEY;
    const API_URL = process.env.REACT_APP_OMDBAPI_URL;
    const url = `${API_URL}?apikey=${API_KEY}&type=movie&s=${query}`;
    fetch (url)
      .then(response => response.json())
      .then(data => {
        if(data.Response !== 'False'){
          this.setState({
            movies: data.Search,
            response: data.Response,
          })
        } else {
          this.setState({
            response: data.Response,
            error: data.Error,
          })
        }
      });
  }

  /***
    Save the like for movie
    Be careful to choice the right one !
  ***/
  isLikeOrNot = (e, idLikeMovie) => {
    e.stopPropagation();
    let likeToUpdate = this.state.currentLike.find(like => like === idLikeMovie)
    if(likeToUpdate){
      this.setState(prevState => {
        let cleanLike = prevState.currentLike.filter(like => like !== likeToUpdate)
        return {
          currentLike: cleanLike
        }
      })
    } else {
      if(GOODCHOICE.indexOf(idLikeMovie) > -1){
        this.setState({
            currentLike: [...this.state.currentLike, idLikeMovie]
        })
      } else {
        let randomnumber = Math.floor(Math.random() * (2 - 0 + 1))
        let text = NOTGOODCHOICE[randomnumber]
        console.log(text, randomnumber);
        this.setState({
            itsNotAGoodChoice: text
        })
      }
    }
  }

  /***
    Get the movie detail after onclick
  ***/
  getMovieDetails = (e, idMovie) => {
    e.stopPropagation();
    const API_KEY = process.env.REACT_APP_OMDBAPI_KEY;
    const API_URL = process.env.REACT_APP_OMDBAPI_URL;
    const url = `${API_URL}?apikey=${API_KEY}&type=movie&i=${idMovie}`;
    fetch (url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if(data.Response !== 'False'){
          this.setState({
            movieDetails: data,
          })
        }
      });
  }

  /***
    Clearn and close the movie detail
  ***/
  closeMovieDetails = e => {
    this.setState({
      movieDetails: {},
    })
  }

  /***
    Clearn and close the modal
  ***/
  closeModal = e => {
    this.setState({
      itsNotAGoodChoice: '',
    })
  }



  render(){
    const { movies, query, response, error, currentLike, movieDetails, itsNotAGoodChoice } = this.state;
    return (
      <>
        <Header />
        <div className="container mx-auto my-5">
          <SearchForm query={query} onInput={this.onInput} placeholder="Search for Movie Title …" />
          <MovieList movies={movies} response={response} error={error} movieDetails={movieDetails} currentLike={currentLike} itsNotAGoodChoice={itsNotAGoodChoice} isLikeOrNot={this.isLikeOrNot} getMovieDetails={this.getMovieDetails} closeMovieDetails={this.closeMovieDetails} closeModal={this.closeModal}/>
        </div>
      </>
    )
  }
}

export default Search
