import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"

function Directors() {
  const [ directors, setDirectors] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then((response) => response.json())
    .then(directors => setDirectors(directors))
    .catch(error => console.error(error))
  }, [])

  const director = directors.map(director => {
    return <article key={director.id}>
      <h2> Director Name: {director.name}</h2>
      <ul>
        Directed Movies:  {director.movies.map((movie) => <li key={movie}>{movie}</li>)}
      </ul>
       </article>
  })
  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Directors Page</h1>
        {director}
      </main>
    </>
  );
};

export default Directors;