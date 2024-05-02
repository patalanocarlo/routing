import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [marvelMovies, setMarvelMovies] = useState([]);
  const [harryPotterMovies, setHarryPotterMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarvelMovies = async () => {
      try {
        const response = await fetch('http://www.omdbapi.com/?s=Marvel&apikey=41856063');
        const data = await response.json();
        if (data.Search) {
          const randomMarvelMovies = data.Search.sort(() => 0.5 - Math.random()).slice(0, 5);
          setMarvelMovies(randomMarvelMovies);
        }
      } catch (error) {
        console.error('Error fetching Marvel movies:', error);
      }
    };

    const fetchHarryPotterMovies = async () => {
      try {
        const response = await fetch('http://www.omdbapi.com/?s=Harry%20Potter&apikey=41856063');
        const data = await response.json();
        if (data.Search) {
          const randomHarryPotterMovies = data.Search.sort(() => 0.5 - Math.random()).slice(0, 5);
          setHarryPotterMovies(randomHarryPotterMovies);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching Harry Potter movies:', error);
      }
    };

    fetchMarvelMovies();
    fetchHarryPotterMovies();
  }, []);

  if (loading) {
    return <div className="container mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="alert alert-dark" role="alert">
        Benvenuto alla nostra pagina di streaming film e serie TV!
      </div>
      <div className="container">
        <h1>Novità</h1>
        <div className="row">
          {marvelMovies.map(movie => (
            <div className="col" key={movie.imdbID}>
              <div className="card" style={{ height: '550px' }}>
                <img src={movie.Poster} className="card-img-top" alt={movie.Title} style={{ height: '65%', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column justify-content-end">
                  <h5 className="card-title">{movie.Title}</h5>
                  <Link to={`/movie/${movie.imdbID}`} className="btn btn-dark text-white mt-2">Scopri di più</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-4">
        <h2>Potrebbe piacerti anche:</h2>
        <div className="row">
          {harryPotterMovies.map(movie => (
            <div className="col" key={movie.imdbID}>
              <div className="card" style={{ height: '550px' }}>
                <img src={movie.Poster} className="card-img-top" alt={movie.Title} style={{ height: '65%', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column justify-content-end">
                  <h5 className="card-title">{movie.Title}</h5>
                  <Link to={`/movie/${movie.imdbID}`} className="btn btn-dark text-white mt-2">Scopri di più</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;