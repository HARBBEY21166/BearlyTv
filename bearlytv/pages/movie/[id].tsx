import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1b2e5afc5260339a0ff4b141cb2643f7`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  const saveToFavorites = () => {
    let savedMovies = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!savedMovies.some((fav) => fav.id === movie.id)) {
      savedMovies.push(movie);
      localStorage.setItem("favorites", JSON.stringify(savedMovies));
      alert("Movie added to favorites!");
    } else {
      alert("Already in favorites!");
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>⭐ {movie.vote_average} / 10</p>
      <button onClick={saveToFavorites}>Save to Favorites</button>
    </div>
  );
}
