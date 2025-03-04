import styled from "styled-components";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

interface Movie {
  poster_path: string;
  title: string;
}

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Card>
      <MovieImage src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <MovieTitle>{movie.title}</MovieTitle>
    </Card>
  );
}

// Styled Components for the movie card
const Card = styled.div`
  background: #222;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(255, 255, 255, 0.2);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const MovieTitle = styled.h2`
  font-size: 1rem;
  color: #fff;
  text-align: center;
  padding: 10px;
`;
