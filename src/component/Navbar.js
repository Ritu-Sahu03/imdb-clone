import React from 'react'
import {Link} from "react-router-dom";

const Navbar=() =>{
 
    // let {mode,title} = this.props;
    return (  
        <>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-dark bg-dark`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDB_logo_icon" height={"25px"} width={"50px"}/>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/movies/popular">Popular</Link></li>
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/movies/top_rated">TopRated</Link></li>
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/movies/upcoming">Upcoming</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  
}

export default Navbar