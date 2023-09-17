import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import './App.css';
import MovieDisplay from './components/movieDisplay';
import Form from './components/form';

function App() {
  const apiKey = 'bdfb4829'; 
  const [movie, setMovie] = useState(null);

  
  const getMovie = (searchTerm) => {
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      .then((response) => {
        const data = response.data; 
        setMovie(data);
      })
      
  }

  useEffect(() => {
    getMovie("The Last Emperor")
  }, []); 

  return (
    <div className='main_div    '>
      <h1>Film Data Base</h1>
      <MovieDisplay movie={movie} /> 
      <Form movieSearch={getMovie} />
      </div>
  );
}

export default App;
