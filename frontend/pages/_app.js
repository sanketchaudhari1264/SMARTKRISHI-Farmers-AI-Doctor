import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { LanguageProvider } from '@/context/LanguageContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function AuthGate({ Component, pageProps }) {
  const router = useRouter()
  const [checked, setChecked] = useState(false)
  const isAuthPage = router.pathname === '/login' || router.pathname === '/signup'

  useEffect(() => {
    const signedIn = window.sessionStorage.getItem('smartkrishi-session')
    if (!signedIn && !isAuthPage) router.replace('/login')
    if (signedIn && isAuthPage) router.replace('/')
    setChecked(true)
  }, [isAuthPage, router])

  if (!checked && !isAuthPage) return null
  return <Layout><Component {...pageProps} /></Layout>
}

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider><AuthGate Component={Component} pageProps={pageProps} /></LanguageProvider>
  )
}
