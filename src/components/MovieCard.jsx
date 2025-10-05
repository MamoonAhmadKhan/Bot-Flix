import React from 'react';
import { IMG_POSTER_CDN } from '../utils/constants';

const MovieCard = (props) => {
    const { posterPath } = props;

  return (
    <div className='cursor-pointer rounded-lg'>
        <img 
        className='w-[300px] rounded-lg'
        src={IMG_POSTER_CDN+posterPath} 
        alt="img_poster" 
        />
    </div>
  )
}

export default MovieCard