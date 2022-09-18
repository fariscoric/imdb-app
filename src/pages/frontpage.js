import React, { useEffect, useState } from 'react'
import './frontpage.css'
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
            <div className='searchResults'>
            <input type='search' className='searchBar' placeholder='Search' onChange={(e) => {
                setTerm(e.target.value)
            }}/>
            <div className='mediaCard'>
            {api?.map((el) => (
                 <Card 
                 sx={{
                   minWidth: 345,
                   maxWidth: 345,
                   mt: 3,
                   maxHeight: "320px",
                   backgroundColor: "#eb4034",
                   color: "#ffffff",
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
        </div>
    )
}


