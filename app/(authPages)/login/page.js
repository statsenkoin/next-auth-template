import Link from 'next/link';
import styles from '../../page.module.css';

export default function Login() {
  return (
    <div>
      <h1>Login page</h1>
      <Link href="/" className={styles.links}>
        Go back to Home page
      </Link>
    </div>
  );
}
