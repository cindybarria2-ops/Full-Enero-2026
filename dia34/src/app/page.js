'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <h1>Home</h1>

      <h2>Posts</h2>
      <ul>
        <li><Link href="/posts/1">Post 1</Link></li>
        <li><Link href="/posts/2">Post 2</Link></li>
        <li><Link href="/posts/3">Post 3</Link></li>
      </ul>

      <button onClick={() => router.push('/posts/1')}>
        Ir al Post 1 (programático)
      </button>

      <br /><br />

      <Link href="/about">Ir a Acerca de</Link>
    </main>
  );
}