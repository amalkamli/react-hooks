import React from 'react';
import { Rating } from 'react-simple-star-rating'

const MovieCard = ({el}) => {
  return (
			<>
                <div className='movie'>
                    <img className='poster' src={el.posterUrl} alt='movie' />
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