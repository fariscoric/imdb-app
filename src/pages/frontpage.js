import React, { useEffect, useState } from 'react'
import './frontpage.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';


export default function FrontPage() {
    const [term, setTerm] = useState('')
    const [api, setApi] = useState([])

    const API_KEY = 'k_iy6e91sj'

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

            <input type='search' placeholder='search' onChange={(e) => {
                setTerm(e.target.value)
            }}/>
            <div className='mediaCards'>
            {api?.map((el) => (
                 <Card
                 sx={{
                   minWidth: 345,
                   maxWidth: 345,
                   mt: 3,
                   maxHeight: "320px",
                   backgroundColor: "#cccccc",
                   color: "#cb2d6f",
                 }}
               >
                 <CardActionArea>
                   <CardMedia
                     component="img"
                     height="240"
                     image={el.image}
                     alt={el.title}
                   />
                   <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                       {el.title}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                       {el.description}
                     </Typography>
                   </CardContent>
                 </CardActionArea>
               </Card>
            )).slice(0,3)}
            </div>
            


        </div>
    )
}


