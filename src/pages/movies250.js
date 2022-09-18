import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './movies250.css'
import Movies from './movies.json'
import { useNavigate} from 'react-router-dom'

export default function MoviePage() {
    const [movies, setMovies] = useState([])
    const navigate = useNavigate();
    

    function getMovies() {
        setMovies(Movies.results)
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
                                <div onClick={() =>
                                    navigate(`${res.id}`, {
                                        state: {
                                            id: res.id,
                                            image: res.image,
                                            title: res.title,
                                            description: res.description,
                                            },
                                        })
                                    }
                                    >{res.title}
                                    </div>
                            </div>
                        </li>
                ))}
            </ul>
        </div>
    )
}