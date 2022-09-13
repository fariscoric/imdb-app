import React from 'react'
import './frontpage.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'

export default function FrontPage() {
    return (
        <div className='container'>
            <div className='navBar'>
                <NavLink to='movies' className='navItem'>Movies</NavLink>
                <NavLink to='series' className='navItem'>TV Shows</NavLink>
            </div>
        </div>
    )
}