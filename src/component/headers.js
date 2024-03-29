import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Headers=()=> {
  return (
    <>
    <div className='header_container'>
      <div className='headerLeft'>
        <Link to="/"><img className="header_icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="imdb_logo" /></Link>
        <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
        <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
        <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
      </div>
    </div>
   </>
  )
}

export default Headers;
