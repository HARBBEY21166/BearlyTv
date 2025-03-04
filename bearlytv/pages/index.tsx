import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState<{ id: number; title: string; overview: string; poster_path: string; release_date: string; vote_average: number; }[]>([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=1b2e5afc5260339a0ff4b141cb2643f7`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <Container>
      <Title>🔥 Trending Movies</Title>
      <GridContainer>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </GridContainer>
    </Container>
  );
}

// Styled Components for better design
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #fff;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
`;
