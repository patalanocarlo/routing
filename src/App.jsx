import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import MyNavbar from './Components/MyNavBar';
import TVShowsPage from './Components/TVShowsPage';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import MovieDetails from './Components/MovieDetails';
import HomePage from './Components/HomePage'; 



function App() {
  return (
   
    <Router>
      <div>
        <MyNavbar />
        <Routes>
        <Route path="/" element={<HomePage />} /> 
          <Route path="/tv-shows" element={<TVShowsPage />} />
          
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;