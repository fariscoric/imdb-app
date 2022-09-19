import React from 'react'
import Movies from './movies.json'
import { useParams, useLocation } from 'react-router-dom'
import './infoPage.css'
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import NavBar from '../components/navbar/navbar'
import { Routes, Route, Link, NavLink } from 'react-router-dom'



export default function InfoPage() {
    const { id } = useParams();
    const { state } = useLocation();
    const movies_id = state.id;
    const image = state.image;
    const title = state.title;
    const description = state.description;

    
    return (
        <div className='Container'>
          <div className='navBar'>
              <NavLink to='/' className='navItem'>IMDB</NavLink>
              <div className='navItemsCont'>
                <NavLink to='/movies' className='navItem'>Movies</NavLink>
                <NavLink to='/series' className='navItem'>TV Shows</NavLink>
          </div>
          </div>
            <Card 
                 sx={{
                   minWidth: 345,
                   maxWidth: 345,
                   mt: 3,
                   maxHeight: "700px",
                   backgroundColor: "#eb4034",
                   color: "#ffffff",
                 }}
               >
                 <CardActionArea>
                   <CardMedia
                     component="img"
                     height="500"
                     image={image}
                     alt={title}
                   />
                   <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                       {title}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                       {description}
                     </Typography>
                   </CardContent>
                 </CardActionArea>
               </Card>
        </div>
    )
}