import React from 'react'
import "./card.css"
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Cards=({movie})=> {
 const [isloading, setIsloading] = useState(true);
 useEffect(() => {
   setTimeout(()=>{
     setIsloading(false);
   }, 1500)
 }, [])
 
  return (
    <>
     {
        isloading
        ?
        <div className='cards'> 
          <SkeletonTheme color="#202020" highlightColor='#4444'>
            <Skeleton height={300} duration={2}/>
          </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}} >
            <div className='cards'>
              <img className="cards_image" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}/>
              <div className='cards_overlay'>
                  <div className='cards_title'>{movie ? movie.original_title: ""}</div>
                  <div className='cards_rlstime'>{movie ? movie.release_date: ""}{<span className='cards_rating'>{movie ? movie.vote_average: ""}<i className="fa-solid fa-star"></i>{" "}
                  </span>}</div>
                  <div className="card_description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
              </div> {/* end of cards_overlay*/}
            </div> {/* end of cards inside Link */}
        </Link>
     }
    </>
  )
}

export default  Cards;