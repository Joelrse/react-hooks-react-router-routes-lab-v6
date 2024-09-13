import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"

function Actors() {
  const [ actors, setActors] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then((response) => response.json())
    .then(actors => setActors(actors))
    .catch(error => console.error(error))
  }, [])
  const actor = actors.map(actor => {
    return <article key={actor.id}>
      <h2> Actor Name: {actor.name}</h2>
      <ul>
        Also Starred in: {actor.movies.map((movie) => <li key={movie}>{movie}</li>)}
      </ul>
       </article>
  })
  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Actors Page</h1>
        {actor}

      </main>
    </>
  );
};

export default Actors;