import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './series250.css'

export default function SeriesPage() {
    const [series, setSeries] = useState([])
    
    const API_KEY = 'k_sbw3q56e'

    function getSeries() {
        axios.get(
        `https://imdb-api.com/en/API/Top250TVs/k_sbw3q56e`
    )
    .then((res) => {
        setSeries(res.data.items);
    });
    }

    useEffect(() => {
        getSeries()
    }, [])

    return (
        <div className='seriesContainer'>
            <ul style={{
                listStyleType: 'none'
            }}>
                {series.map((res) => (
                        <li>
                            <div className='listItem'>
                            <div className='listItemNumber'>{res.rank}</div>
                            <div className='listItemName'>{res.title}</div>
                            <div className='listItemRating'>{res.imDbRating}</div>
                            </div>
                        </li>
                ))}
            </ul>
        </div>
    )
}