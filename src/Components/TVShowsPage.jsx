
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TVShowsPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://www.omdbapi.com/?s=movie&apikey=41856063'); 
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Tv-Shows</h1>
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {movies.map(movie => (
          <div className="col" key={movie.imdbID}>
            <div className="card">
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">Year: {movie.Year}</p>
                <Link to={`/movie/${movie.imdbID}`} className="btn btn-dark text-white">Dettagli</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TVShowsPage;