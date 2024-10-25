import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Welcome</h2>
        <p>
          Dive into a world of delicious desserts crafted just for you. Whether you are craving rich chocolates, fruity
          delights, or classic pastries, we have something to satisfy every sweet tooth. Explore our menu, indulge in
          our creations, and let each bite take you on a delightful journey!
        </p>
        <Link href="/catalog">SHOW CATALOG</Link>
      </div>
    </main>
  );
}
