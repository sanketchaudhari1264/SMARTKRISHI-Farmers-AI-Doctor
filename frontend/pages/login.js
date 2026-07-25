import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '@/context/LanguageContext'
import styles from '@/styles/Auth.module.css'

export default function Login() {
  const { t } = useLanguage()
  const router = useRouter()
  const [message, setMessage] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    if (!form.get('email') || !form.get('password')) return setMessage(t('formRequired'))
    window.sessionStorage.setItem('smartkrishi-session', form.get('email'))
    setMessage(t('loginSuccess'))
    router.push('/')
  }
  return <main className={styles.page}><section className={styles.panel}>
    <div className={styles.brandPanel}><span className={styles.leaf}>🌱</span><p className={styles.eyebrow}>{t('secure')}</p><h1>SmartKrishi</h1><p>{t('authCaption')}</p></div>
    <div className={styles.formPanel}><div className={styles.formInner}><p className={styles.eyebrow}>{t('secure')}</p><h2>{t('welcomeBack')}</h2><p className={styles.intro}>{t('loginIntro')}</p>
      <form onSubmit={handleSubmit} noValidate><label htmlFor="email">{t('email')}</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
      <label htmlFor="password">{t('password')}</label><input id="password" name="password" type="password" autoComplete="current-password" placeholder="••••••••" required />
      <div className={styles.helper}><label className={styles.remember}><input type="checkbox" /> {t('remember')}</label><button type="button" className={styles.textButton}>{t('forgot')}</button></div>
      {message && <p className={styles.message} role="status">{message}</p>}<button className={styles.submit} type="submit">{t('loginButton')}</button></form>
      <p className={styles.switch}>{t('noAccount')} <Link href="/signup">{t('createAccount')}</Link></p></div></div>
  </section></main>
}
