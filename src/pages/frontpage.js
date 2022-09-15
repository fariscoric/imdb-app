import React, { useEffect, useState } from 'react'
import './frontpage.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import axios from 'axios'

export default function FrontPage() {
    const [term, setTerm] = useState('')
    const [api, setApi] = useState([])

    const API_KEY = 'k_sbw3q56e'

    const getApi = async () => {
        const res = await axios.get(
          `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${term}`
        );
        setApi(res.data.results);
      };

    useEffect(()=> {
        getApi();
    }, [term])


    return (
        <div className='container'>
            <div className='navBar'>
                <NavLink to='movies' className='navItem'>Movies</NavLink>
                <NavLink to='series' className='navItem'>TV Shows</NavLink>
            </div>


            <input type='text' placeholder='search' onChange={(event) => {
                setTerm(event.target.value)
            }}/>

            {/* {api.length != 0 ? api.map((el) => (
                <h1>{el.title}</h1>
            ):)} */}

        </div>
    )
}


