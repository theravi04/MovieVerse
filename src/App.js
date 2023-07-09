import React from 'react'
import { useEffect } from "react";
import './App.css';
import SearchIcon from './Search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=fb5fe62c';

const movie1 = {
    "Title": "Reign of Judges: Title of Liberty - Concept Short",
    "Year": "2018",
    "imdbID": "tt4275958",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWM0MDI1ZmItZTYzNi00ZWVlLTg5MTctNzllNjY2ZTI3NDhhXkEyXkFqcGdeQXVyNDk5MjA2MQ@@._V1_SX300.jpg"
}


export const App = () => {

  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  },[]);

  return (
    <div className='app'>
      <h1>MovieVerse</h1>

      <div className='search'>
        <input
          placeholder='Search For Movies'
          value="Superman"
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {}}
        />
      </div>

      <div className='container'>
        <div className='movie'>
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img
              src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
              alt={movie1.Title}
            />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App;