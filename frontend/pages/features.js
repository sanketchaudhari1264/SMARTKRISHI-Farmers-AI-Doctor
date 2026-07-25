import styles from '../styles/Features.module.css'

export default function Features() {
  const features = [
    {
      title: "AI-Powered Disease Detection",
      description: "Advanced machine learning algorithms analyze crop images to identify diseases with high accuracy. Get instant results and recommendations.",
      icon: "🔬"
    },
    {
      title: "Multi-Language Support",
      description: "Access information in your local language. SmartKrishi supports multiple Indian languages including Hindi, Marathi, and more.",
      icon: "🌍"
    },
    {
      title: "Expert Recommendations",
      description: "Receive detailed treatment plans, fertilizer suggestions, and preventive measures based on agricultural best practices.",
      icon: "📋"
    },
    {
      title: "Real-Time Analysis",
      description: "Get instant diagnosis and recommendations within seconds. No waiting, no delays – just fast, accurate results.",
      icon: "⚡"
    },
    {
      title: "Comprehensive Database",
      description: "Access a vast database of crop diseases, treatments, and farming techniques curated by agricultural experts.",
      icon: "📚"
    },
    {
      title: "Free & Accessible",
      description: "SmartKrishi is free to use for all farmers. No subscriptions, no hidden costs – just pure agricultural assistance.",
      icon: "🎁"
    },
    {
      title: "Mobile Friendly",
      description: "Use SmartKrishi on any device – smartphone, tablet, or computer. Diagnose crops from anywhere in your field.",
      icon: "📱"
    },
    {
      title: "Weather Integration",
      description: "Get weather-based recommendations and alerts to help you plan farming activities and prevent weather-related crop issues.",
      icon: "🌤️"
    },
    {
      title: "Community Support",
      description: "Connect with other farmers, share experiences, and learn from the community. Together we grow stronger.",
      icon: "👥"
    }
  ]

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1 className={styles.pageTitle}>Features</h1>
        <p className={styles.heroSubtitle}>Powerful tools for modern farming</p>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Transform Your Farming?</h2>
        <p>Start using SmartKrishi today and join thousands of farmers who are already benefiting from our AI-powered assistance.</p>
        <a href="/doctor" className={styles.ctaButton}>Get Started Now</a>
      </section>
    </div>
  )
}
