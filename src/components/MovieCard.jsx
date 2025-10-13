import React from 'react';
import { IMG_POSTER_CDN } from '../utils/constants';

const MovieCard = (props) => {
    const { posterPath } = props;

  return (
    <div className='cursor-pointer rounded-lg'>
      {
       posterPath ? ( <img 
        className='w-[300px] rounded-lg'
        src={IMG_POSTER_CDN+posterPath} 
        alt="img_poster" 
        /> ) : (
          <div className='w-[300px] rounded-lg'>
            <h3 className='p-2 text-lg font-medium'>Poster not availabe</h3>
          </div>
        )
      }
    </div>
  )
}

export default MovieCard