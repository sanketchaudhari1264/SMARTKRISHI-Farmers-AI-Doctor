import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLink}>HOME</Link>
        <Link href="/about" className={styles.navLink}>ABOUT</Link>
        <Link href="/doctor" className={styles.navLink}>DOCTOR</Link>
        <Link href="/features" className={styles.navLink}>FEATURES</Link>
        <Link href="/product" className={styles.navLink}>PRODUCT</Link>
      </div>
    </nav>
  )
}
