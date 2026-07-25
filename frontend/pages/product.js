import styles from '../styles/Product.module.css'

export default function Product() {
  const products = [
    {
      icon: "🌱",
      name: "SmartKrishi Mobile App",
      description: "A dedicated mobile app for instant crop diagnosis and farming assistance directly from your phone — anytime, anywhere.",
      features: ["Offline mode", "Image recognition", "Multi-language support", "Push notifications"]
    },
    {
      icon: "🧪",
      name: "Soil Testing Kit",
      description: "Comprehensive soil testing kit to analyze NPK levels, pH, and moisture content for accurate crop recommendations.",
      features: ["Digital readings", "Smartphone connectivity", "Instant results", "Weather resistant"]
    },
    {
      icon: "🌦️",
      name: "Weather Station",
      description: "Smart farm weather monitoring station to track temperature, humidity, rainfall, and wind speed in real-time.",
      features: ["24/7 monitoring", "Mobile alerts", "Historical data", "Solar powered"]
    },
    {
      icon: "💧",
      name: "Smart Irrigation Controller",
      description: "Automated irrigation system that waters your crops based on soil moisture and weather data — saving water and effort.",
      features: ["Auto scheduling", "Water savings", "Remote control", "Zone management"]
    },
    {
      icon: "🌾",
      name: "Fertilizer & Pesticide Kit",
      description: "Precision fertilizer and pesticide recommendation kit tailored to your crop type, soil condition, and growth stage.",
      features: ["Crop-specific dosage", "Cost calculator", "Application guide", "Organic options"]
    },
    {
      icon: "👨‍🌾",
      name: "Expert Agri Consultation",
      description: "Get personalized guidance from certified agricultural experts through physical visits, calls, and detailed farm reports.",
      features: ["On-site farm visit", "Expert advice", "Detailed reports", "Follow-up support"]
    }
  ]

  return (
    <div className={styles.container}>

      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.comingSoonBadge}>🚀 Coming Soon</div>
        <h1 className={styles.pageTitle}>SmartKrishi Products & Services</h1>
        <p className={styles.heroSubtitle}>Everything a farmer needs - we are bringing it all to you</p>
      </section>

      {/* Info Banner */}
      <section className={styles.infoBanner}>
        <div className={styles.infoBannerInner}>
          <h2>We Deliver What You Need</h2>
          <p>
            All the products and services listed below are <strong>coming soon</strong>. Whatever you need for your farm -
            seeds, fertilizers, tools, pesticides, or expert advice - just tell us and we will arrange it <strong>as per your recommendation</strong>.
            Our team will personally contact you and deliver products directly to your location.
          </p>
          <p>
            Simply reach out to us through the contact details below and we will take care of the rest.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className={styles.productsSection}>
        <h2 className={styles.sectionLabel}>Upcoming Products & Services</h2>
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <div className={styles.productIcon}>{product.icon}</div>
              <div className={styles.productHeader}>
                <h3>{product.name}</h3>
                <span className={styles.badgeComingSoon}>Coming Soon</span>
              </div>
              <p className={styles.description}>{product.description}</p>
              <ul className={styles.featureList}>
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <h2>Contact Us to Place Your Order</h2>
        <p className={styles.contactSubtitle}>
          Tell us what products or services you need — we will personally reach out and deliver to your farm location.
        </p>

        <div className={styles.contactGrid}>

          <div className={styles.contactCard}>
            <div className={styles.contactIconBox}>📞</div>
            <h3>Call Us</h3>
        
            <p>+7620183105</p>
            <span>Mon – Sat, 9am – 6pm</span>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIconBox}>📧</div>
            <h3>Founder</h3>
           
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIconBox}>📍</div>
            <h3>Visit Us</h3>

            <p>SmartKrishi Office</p>
            <p>Jalgaon, Maharashtra – 425001</p>
            <span>Maharastra</span>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIconBox}>💬</div>
            <h3>WhatsApp</h3>
            <p>+7620183105</p>
            <p>Send your crop photo & requirement</p>
            <span>Quick response guaranteed</span>
          </div>

        </div>

        <div className={styles.noteBox}>
          🌿 <strong>Note:</strong> We offer <strong>free farm visits</strong> for bulk orders and expert consultations.
          Our agricultural team will come to your location, assess your farm, and provide the best product recommendations.
        </div>
      </section>

    </div>
  )
}
