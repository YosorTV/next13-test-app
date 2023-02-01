import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

export const Movie = ({ title, poster, release, id }) => {
  const imagePath = `https://image.tmdb.org/t/p/original${poster ?? ''}`;
  return (
    <div>
      <h1>{title}</h1>
      <h2>Release date: {release}</h2>
      <Link href={`/about/${id}`}>
        <Image src={imagePath} alt={title} width={500} height={500} />
      </Link>
    </div>
  );
};
