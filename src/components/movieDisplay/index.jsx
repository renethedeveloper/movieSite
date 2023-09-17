import React from 'react'

const MovieDisplay = ({movie}) => {

    const loaded =()=>{
  return (
    <div>
        <h1>{movie.Title}</h1>
        <h1>{movie.Genre}</h1>
        <img src={movie.Poster} alt={movie.Title} />
        <h1>{movie.Year}</h1>
      
    </div>
  )
}
const loading =()=>{
    return <h1>No movie to display</h1>;
}

return movie? loaded(): loading();

}

export default MovieDisplay
