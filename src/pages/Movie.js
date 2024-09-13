import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then((response) => {
      if(!response.ok) {
        throw new Error("Network response was no ok")
      }
      return response.json()
    })
    .then((data) => {
      setMovie(data);
        setLoading(false)
    })
    .catch((error) => {
      console.error("error fetching movie details:", error);
      setError(error);
      setLoading(false)
    })
  },[id])
  if (loading) {
    return <p>Loading movie details, please wait...</p>
  }
  if(error) {
    return <p>Error: {error.message}</p>
  }
  if (!movie) {
    return <p>No Movie Details Available, sorry!</p>
  }

    return (
    <>
      <header>
       <NavBar />
       </header>
      <main>
        <h1>title: {movie.title}</h1>
        <p>Movie Time: {movie.time}</p>
        <p>Movie Genre: {movie.genres.map((genre) => <span key={genre}>{genre}</span>)}</p>
      </main>
    </>
  );
};

export default Movie;