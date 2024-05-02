import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { imdbID } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=41856063`);
        const data = await response.json();
        setMovieDetails(data);
        // Imposta il caricamento su false dopo 1 secondo
        setTimeout(() => setLoading(false), 1000);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (loading) {
    return <div className="container mt-4">Loading...</div>;
  }

  if (!movieDetails) {
    return <div className="container mt-4">Movie details not found.</div>;
  }

  return (
    <div className="container mt-4 bg-dark text-white p-4">
      <div className="row">
        <div className="col-md-4">
          <img src={movieDetails.Poster} className="img-fluid" alt={movieDetails.Title} />
        </div>
        <div className="col-md-8">
          <h1>{movieDetails.Title}</h1>
          <p><strong>Year:</strong> {movieDetails.Year}</p>
          {/* Altre informazioni sul film, se necessario */}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;