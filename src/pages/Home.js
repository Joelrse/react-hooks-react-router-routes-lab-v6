import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import MovieCard from "../components/MovieCard"
function Home() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then((response) => response.json())
    .then(movies => setMovies(movies))
    .catch(error => console.error(error))
  }, [])
  const movie = movies.map(movie => {
    return <li key={movie.id}><MovieCard  title={movie.title} id={movie.id} /> </li>
  })
    return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <ul>
          {movie}
        </ul>
      </main>
    </div>
  );
};

export default Home;