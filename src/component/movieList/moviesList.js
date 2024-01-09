import React from 'react'
import { useState, useEffect } from 'react'
import Cards from "../cardcomp/cards";
import "./movieList.css"
import { useParams } from 'react-router-dom';

const MoviesList=()=> {
  const [movieList, setMovieList] = useState([]);
  const {type} = useParams();
  useEffect(() => {
   getData();
  }, [])
  
  useEffect(() => {
   getData();
  }, [type])

const getData=()=>{
    const url = fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=687fa7f1ff172e51b997f0d0f17f11ed&language=en-US`);
    url.then(res=>res.json()).then(data=>setMovieList(data.results));
}
  return (
    <div className='movieList'>
      <h2 className='list_title'>{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className='list_card'>
          {
            movieList.map(movie =>(
                <Cards movie = {movie} />
                
            ))
          }
      </div>
    </div>
  )
}

export default MoviesList;
