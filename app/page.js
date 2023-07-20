'use client';

import { connectDb } from '@/utils/database';
import styles from './page.module.css';
import Link from 'next/link';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  return (
    <>
      <h1>Home page</h1>

      <button
        onClick={() => {
          signIn('google');
        }}>
        Sign in with Google
      </button>

      <button
        onClick={() => {
          signOut();
        }}>
        Sign out with Google
      </button>

      <Link href="/register" className={styles.links}>
        Go to Register page
      </Link>
      <Link href="/login" className={styles.links}>
        Go to Login page
      </Link>
    </>
  );
}
