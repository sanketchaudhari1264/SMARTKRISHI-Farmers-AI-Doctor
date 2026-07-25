import styles from './Layout.module.css'
import Navbar from './Navbar'
import { useLanguage } from '@/context/LanguageContext'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const { t } = useLanguage()
  const router = useRouter()
  const isAuthPage = router.pathname === '/login' || router.pathname === '/signup'
  return (
    <>
      {!isAuthPage && <Navbar />}
      <main className={isAuthPage ? styles.authMain : styles.main}>
        {children}
      </main>
      {!isAuthPage && <footer className={styles.footer}>
        <p>{t('footer')}</p>
      </footer>}
    </>
  )
}
