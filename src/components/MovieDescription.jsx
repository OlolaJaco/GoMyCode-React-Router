import React from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieDescription = ({movies}) => {

    const { id } = useParams();
    const movie = movies.find(movie => movie.id === Number(id));

    if (!movie) return <h2>Movie not found!</h2>

    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.imageUrl} className='w-52' alt="" />
            <p>{movie.description}</p>
            <iframe className='w-64' src={movie.trailerLink} title={movie.title} frameborder="0"></iframe><br />
            <Link className='text-blue-500' to="/" >Back to Home</Link>
        </div>
    )
}

export default MovieDescription
