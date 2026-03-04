import styles from './Layout.module.css'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2026 SmartKrishi. All rights reserved.</p>
      </footer>
    </>
  )
}
