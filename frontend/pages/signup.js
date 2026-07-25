import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '@/context/LanguageContext'
import styles from '@/styles/Auth.module.css'

export default function Signup() {
  const { t } = useLanguage()
  const router = useRouter()
  const [message, setMessage] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    if (!form.get('name') || !form.get('email') || !form.get('password') || !form.get('confirmPassword')) return setMessage(t('formRequired'))
    if (form.get('password') !== form.get('confirmPassword')) return setMessage(t('passwordsMatch'))
    window.sessionStorage.setItem('smartkrishi-session', form.get('email'))
    setMessage(t('signupSuccess'))
    router.push('/')
  }
  return <main className={styles.page}><section className={styles.panel}>
    <div className={styles.brandPanel}><span className={styles.leaf}>🌾</span><p className={styles.eyebrow}>{t('secure')}</p><h1>SmartKrishi</h1><p>{t('authCaption')}</p></div>
    <div className={styles.formPanel}><div className={styles.formInner}><p className={styles.eyebrow}>{t('secure')}</p><h2>{t('joinUs')}</h2><p className={styles.intro}>{t('signupIntro')}</p>
      <form onSubmit={handleSubmit} noValidate><label htmlFor="name">{t('name')}</label><input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
      <label htmlFor="email">{t('email')}</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
      <label htmlFor="password">{t('password')}</label><input id="password" name="password" type="password" autoComplete="new-password" placeholder="At least 8 characters" minLength="8" required />
      <label htmlFor="confirmPassword">{t('confirmPassword')}</label><input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" placeholder="••••••••" minLength="8" required />
      {message && <p className={styles.message} role="status">{message}</p>}<button className={styles.submit} type="submit">{t('signupButton')}</button></form>
      <p className={styles.switch}>{t('haveAccount')} <Link href="/login">{t('login')}</Link></p></div></div>
  </section></main>
}
