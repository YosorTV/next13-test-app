'use client';

import { useAppStore } from 'src/store/store';

export default function Home() {
  const store = useAppStore();

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
