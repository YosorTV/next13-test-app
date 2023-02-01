import { Movie } from 'src/components';
import { getMovies } from 'src/services/movies';

export default async function Home() {
  const movies = await getMovies();

  const printMovies = (el) => (
    <Movie key={el?.id} id={el?.id} title={el?.title} release={el?.release_date} poster={el?.backdrop_path} />
  );

  return (
    <main>
      <h1>List of movies</h1>
      {movies.map(printMovies)}
    </main>
  );
}
