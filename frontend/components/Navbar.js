import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const { language, changeLanguage, t } = useLanguage()
  const router = useRouter()
  const links = [['/', 'home'], ['/about', 'about'], ['/doctor', 'doctor'], ['/features', 'features'], ['/product', 'product']]
  useEffect(() => setIsSignedIn(Boolean(window.sessionStorage.getItem('smartkrishi-session'))), [])
  const handleLogout = () => {
    window.sessionStorage.removeItem('smartkrishi-session')
    setIsSignedIn(false)
    setIsOpen(false)
    router.push('/login')
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.brand}>SmartKrishi</Link>
        <button className={styles.menuButton} aria-label={isOpen ? t('close') : t('menu')} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}><span></span><span></span><span></span></button>
        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          {links.map(([href, key]) => <Link key={key} href={href} className={styles.navLink} onClick={() => setIsOpen(false)}>{t(key)}</Link>)}
          <select value={language} onChange={(e) => changeLanguage(e.target.value)} className={styles.languageSelect} aria-label={t('language')}><option value="en">EN</option><option value="hi">हिंदी</option><option value="mr">मराठी</option></select>
          {isSignedIn ? <button type="button" className={styles.logoutButton} onClick={handleLogout}>{t('logout')}</button> : <><Link href="/login" className={styles.loginLink} onClick={() => setIsOpen(false)}>{t('login')}</Link><Link href="/signup" className={styles.signupLink} onClick={() => setIsOpen(false)}>{t('signup')}</Link></>}
        </div>
      </div>
    </nav>
  )
}
