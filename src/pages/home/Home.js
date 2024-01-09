import './home.css'
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MoviesList from '../../component/movieList/moviesList';

const Home=()=>{
 const [popularMovies, setPopularMovies] = useState([]);
  useEffect(()=>{
    const url = fetch("https://api.themoviedb.org/3/movie/popular?api_key=687fa7f1ff172e51b997f0d0f17f11ed");
    url.then(res=>res.json()).then(data=>setPopularMovies(data.results));
  }, []);
   
 return(
    <div className='poster'>

      <Carousel
        showThumbs = {false}
        autoPlay = {true}
        transitionTime = {3}
        infiniteLoop = {true}
        showStatus = {false}
        >
          {
            popularMovies.map(movie =>(
              <Link style={{textDecoration:"none", color:"white", }} to={`/movie/${movie.id}`}>
              <div className="posterImage">
                 <img src={`https:/image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
              </div>
              <div className='posterImage_overlay'>
               <div className='posterImage_title'>{movie ? movie.original_title : ""}</div>

               <div className='posterImage_rlstime'>{movie ? movie.release_date : "" }
               {<span className='posterImage_rating'>{movie ? movie.vote_average: ""}<i className="fa-solid fa-star"></i>{" "}
               </span>}
               </div>{/*end of  posterImage_rlstime*/}
               <div className='posterImage_description'>{movie ? movie.overview : ""}</div>
              </div> {/* end of posterImage*/}
              </Link>
            ))
          }
        </Carousel>
        <MoviesList/>
    </div>
 )
}

export default Home;