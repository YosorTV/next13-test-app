import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getMovieById } from 'src/services/movies';

export default async function AboutMovie({ params }) {
  const movie = await getMovieById(params?.movie);
  const imagePath = `https://image.tmdb.org/t/p/original${movie.backdrop_path ?? ''}`;

  return (
    <div>
      <h2>{movie?.title}</h2>
      <h3>{movie?.release_date}</h3>
      <h3>Runtime: {movie?.runtime}</h3>
      <h3>{movie?.status}</h3>
      <h3>Budget: {movie?.budget}$</h3>
      <Link href={movie?.homepage} target="_blank">
        <div className="relative">
          <Image src={imagePath} alt="cover" height={500} width={500} priority />
        </div>
      </Link>
      <p>{movie?.overview}</p>
    </div>
  );
}
