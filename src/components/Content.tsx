
import { MovieCard } from '../components/MovieCard';

import '../styles/global.scss';

import '../styles/content.scss';

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  movies:  Array<MovieProps>;
  titleGender: string;
}

 
export function Content(props: ContentProps) {
  const { movies } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.Title}title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}