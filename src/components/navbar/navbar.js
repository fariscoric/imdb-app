import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import './navbar.css'

export default function NavBar() {
    return (
        <div className='navBar'>
              <NavLink to='/' className='navItem'>IMDB</NavLink>
              <div className='navItemsCont'>
                <NavLink to='movies' className='navItem'>Movies</NavLink>
                <NavLink to='series' className='navItem'>TV Shows</NavLink>
              </div>
        </div>
    )
}
