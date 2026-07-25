import { createContext, useContext, useEffect, useState } from 'react'

const translations = {
  en: {
    home: 'Home', about: 'About', doctor: 'Crop Doctor', features: 'Features', product: 'Products',
    login: 'Log in', signup: 'Sign up', logout: 'Log out', language: 'Language', menu: 'Open menu', close: 'Close menu',
    footer: '© 2026 SmartKrishi. All rights reserved.',
    welcomeBack: 'Welcome back', loginIntro: 'Sign in to continue caring for your crops.', email: 'Email address',
    password: 'Password', forgot: 'Forgot password?', remember: 'Remember me', noAccount: 'New to SmartKrishi?', createAccount: 'Create an account',
    loginButton: 'Log in', loginSuccess: 'You are signed in. Welcome back!',
    joinUs: 'Grow smarter with us', signupIntro: 'Create your free SmartKrishi account and get crop guidance whenever you need it.',
    name: 'Full name', confirmPassword: 'Confirm password', haveAccount: 'Already have an account?', signupButton: 'Create free account',
    signupSuccess: 'Your account is ready. Welcome to SmartKrishi!', passwordsMatch: 'Passwords do not match.',
    formRequired: 'Please complete all required fields.', secure: 'Your farming companion', authCaption: 'Practical crop support, designed for every farmer.'
  },
  hi: {
    home: 'होम', about: 'हमारे बारे में', doctor: 'फसल डॉक्टर', features: 'सुविधाएँ', product: 'उत्पाद',
    login: 'लॉग इन', signup: 'साइन अप', logout: 'लॉग आउट', language: 'भाषा', menu: 'मेनू खोलें', close: 'मेनू बंद करें',
    footer: '© 2026 स्मार्टकृषि। सर्वाधिकार सुरक्षित।',
    welcomeBack: 'वापसी पर स्वागत है', loginIntro: 'अपनी फसलों की देखभाल जारी रखने के लिए साइन इन करें।', email: 'ईमेल पता',
    password: 'पासवर्ड', forgot: 'पासवर्ड भूल गए?', remember: 'मुझे याद रखें', noAccount: 'स्मार्टकृषि पर नए हैं?', createAccount: 'खाता बनाएँ',
    loginButton: 'लॉग इन', loginSuccess: 'आप साइन इन हो गए हैं। स्वागत है!',
    joinUs: 'हमारे साथ समझदारी से खेती करें', signupIntro: 'अपना मुफ्त स्मार्टकृषि खाता बनाएँ और जब चाहें फसल मार्गदर्शन पाएँ।',
    name: 'पूरा नाम', confirmPassword: 'पासवर्ड की पुष्टि करें', haveAccount: 'पहले से खाता है?', signupButton: 'मुफ्त खाता बनाएँ',
    signupSuccess: 'आपका खाता तैयार है। स्मार्टकृषि में आपका स्वागत है!', passwordsMatch: 'पासवर्ड मेल नहीं खाते।',
    formRequired: 'कृपया सभी आवश्यक जानकारी भरें।', secure: 'आपका कृषि साथी', authCaption: 'हर किसान के लिए उपयोगी फसल सहायता।'
  },
  mr: {
    home: 'मुख्यपृष्ठ', about: 'आमच्याबद्दल', doctor: 'पीक डॉक्टर', features: 'वैशिष्ट्ये', product: 'उत्पादने',
    login: 'लॉग इन', signup: 'नोंदणी करा', logout: 'लॉग आउट', language: 'भाषा', menu: 'मेनू उघडा', close: 'मेनू बंद करा',
    footer: '© 2026 स्मार्टकृषी. सर्व हक्क राखीव.',
    welcomeBack: 'पुन्हा स्वागत आहे', loginIntro: 'तुमच्या पिकांची काळजी सुरू ठेवण्यासाठी साइन इन करा.', email: 'ईमेल पत्ता',
    password: 'पासवर्ड', forgot: 'पासवर्ड विसरलात?', remember: 'मला लक्षात ठेवा', noAccount: 'स्मार्टकृषीमध्ये नवीन आहात?', createAccount: 'खाते तयार करा',
    loginButton: 'लॉग इन', loginSuccess: 'तुम्ही साइन इन केले आहे. पुन्हा स्वागत आहे!',
    joinUs: 'आमच्यासोबत अधिक चांगली शेती करा', signupIntro: 'तुमचे मोफत स्मार्टकृषी खाते तयार करा आणि हवे तेव्हा पीक मार्गदर्शन मिळवा.',
    name: 'पूर्ण नाव', confirmPassword: 'पासवर्ड पुन्हा टाका', haveAccount: 'आधीच खाते आहे?', signupButton: 'मोफत खाते तयार करा',
    signupSuccess: 'तुमचे खाते तयार आहे. स्मार्टकृषीमध्ये स्वागत आहे!', passwordsMatch: 'पासवर्ड जुळत नाहीत.',
    formRequired: 'कृपया सर्व आवश्यक माहिती भरा.', secure: 'तुमचा शेती साथीदार', authCaption: 'प्रत्येक शेतकऱ्यासाठी उपयुक्त पीक मदत.'
  }
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const saved = window.localStorage.getItem('smartkrishi-language')
    if (saved && translations[saved]) setLanguage(saved)
  }, [])

  const changeLanguage = (value) => {
    setLanguage(value)
    window.localStorage.setItem('smartkrishi-language', value)
  }

  return <LanguageContext.Provider value={{ language, changeLanguage, t: (key) => translations[language][key] || translations.en[key] || key }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
