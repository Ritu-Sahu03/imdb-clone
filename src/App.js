import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from './component/headers';
import Home from './pages/home/Home';
import MoviesList from './component/movieList/moviesList';
import MoviesDetail from './component/movieDetail/moviesDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Headers/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/movie/:id" element={<MoviesDetail/>}></Route>
          <Route path="/movies/:type" element={<MoviesList/>}></Route>
          <Route path="/*" element={<h1>Error</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
