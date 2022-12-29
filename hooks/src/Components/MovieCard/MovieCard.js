import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'

const MovieCard = ({el}) => {
  return (
			<>
                <div className='movie'>
                    <Link to={`/details/${el.id}`}><img className='poster' src={el.posterUrl} alt='movie' /></Link>
                <div className='movie-details'>
                    <div className='box'>
                        <h2 className='title' >{el.title}</h2>
                        <Rating
                         className='rating'
                         iconsCount={5} 
                         initialValue={el.rating}
                         readOnly={true}
                         size="20px" />
                    </div>
                    <div className='overview'>
                        <h1>Overview</h1>
                       {el.description}
                    </div> 
                      </div>
                      </div>
</>	 
        );
    };

export default MovieCard