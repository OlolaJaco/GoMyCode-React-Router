import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({movies}) => {
    return (
        <div className='flex gap-2 p-7'>
            {movies.map((movie, index) => {
                return (
                    <div key={index} className='bg-gray-200 w-40 flex-wrap p-2'>
                        <img className='w-52' src={movie.imageUrl} alt="" />
                        <h3>{movie.title}</h3>
                        <p>Rating: {movie.rating}</p>
                        <Link className='text-blue-500' to={`movies/${movie.id}`}> View Details </Link>
                    </div>
                )
            })}
        </div>
    )
}


export default MovieCard;
