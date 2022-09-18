import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './series250.css'
import Series from './series.json'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/navbar/navbar'

export default function SeriesPage() {
    const [series, setSeries] = useState([])
    const navigate = useNavigate();

    function getSeries() {
        setSeries(Series.results)
    }

    useEffect(() => {
        getSeries()
    }, [])

    return (
        <div className='seriesContainer'>
            <NavBar/>
            <ul style={{
                listStyleType: 'none'
            }}>
                {series.map((res) => (
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