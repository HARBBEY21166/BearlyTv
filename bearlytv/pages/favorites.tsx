import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(savedMovies);
  }, []);

  return (
    <div>
      <h1>Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
