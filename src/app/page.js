/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect } from 'react';
import { useAppStore } from 'src/store/store';

export default function Home() {
  const getMovies = useAppStore((store) => store.getMovies);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
