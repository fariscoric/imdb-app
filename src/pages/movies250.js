import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './movies250.css'

export default function MoviePage() {
    const [movies, setMovies] = useState([])
    
    const API_KEY = 'k_sbw3q56e'

    function getMovies() {
        axios.get(
        `https://imdb-api.com/en/API/Top250Movies/k_sbw3q56e`
    )
    .then((res) => {
        setMovies(res.data.items);
    });
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div className='movieContainer'>
            {console.log(movies)}
            <ul style={{
                listStyleType: 'none'
            }}>
                {movies.map((res) => (
                        <li>
                            <div className='listItem'>
                                <div>{res.rank}</div>
                                <div>{res.title}</div>
                                <div>{res.imDbRating}</div>
                            </div>
                        </li>
                ))}
            </ul>
        </div>
    )
}