import React, { Component } from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom'

class Intro extends Component {

    render(){
        return (
            <>
              <Header />
              <div className="container mx-auto my-5">
                <div className="text-center">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-indigo-600">BlablaMovie Game !</h1>
                  <div>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">Each week you can select up to 3 of your favourite movies to show to everyone which movies are really the best. No time to waste and got get started ! </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                      <div className="rounded-md shadow">
                        <NavLink to="/search" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10" exact={true}>Get started </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 md:mx-40 lg:mx-80 mt-10">
                    <img className="flex-shrink" alt="The Grand Budapest Hotel" src="https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg" />
                    <img className="flex-shrink" alt="Howl's Moving Castle" src="https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" />
                    <img className="flex-shrink" alt="Predestination" src="https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_SX300.jpg" />
                  </div>
                  <p className="text-xl font-bold">Last week winners !</p>
                </div>
              </div>
            </>
        )
    }

}

export default Intro
