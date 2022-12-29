import React from 'react';
import MovieCard from '../MovieCard/MovieCard';


function MovieList({data}) {
	return (
	  <div className="d-flex">{data.map((el) =><MovieCard el={el} key={el.id}/>)}</div>
	  
	)
  }
export default MovieList; 
