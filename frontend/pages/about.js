import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1 className={styles.pageTitle}>About SmartKrishi</h1>
        <p className={styles.heroSubtitle}>Empowering Farmers with AI Technology</p>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.content}>
          <div className={styles.infoCard}>
            <h2>Our Mission</h2>
            <p>
              SmartKrishi is dedicated to revolutionizing agriculture by providing farmers with 
              cutting-edge AI-powered tools to identify crop diseases, understand plant health issues, 
              and receive personalized farming guidance. We believe every farmer deserves access to 
              expert agricultural knowledge in their local language.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h2>What We Do</h2>
            <p>
              Our smart farming assistant helps farmers:
            </p>
            <ul>
              <li>Identify crop diseases through image recognition</li>
              <li>Understand crop problems and their root causes</li>
              <li>Get personalized treatment recommendations</li>
              <li>Learn about appropriate fertilizers and pesticides</li>
              <li>Prevent future crop issues with expert guidance</li>
              <li>Access information in simple, local language</li>
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h2>How It Works</h2>
            <p>
              SmartKrishi uses advanced artificial intelligence and machine learning algorithms 
              to analyze crop images and diagnose potential issues. Simply upload a photo of your 
              crop or describe the problem you're facing, and our system will provide detailed 
              analysis and actionable recommendations tailored to your specific situation.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h2>Our Vision</h2>
            <p>
              We envision a future where technology bridges the gap between traditional farming 
              wisdom and modern agricultural science. By making expert knowledge accessible to 
              every farmer, we aim to increase crop yields, reduce losses from diseases, and 
              contribute to sustainable farming practices across India and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className={styles.founderSection}>
        <h2 className={styles.founderTitle}>Meet the Founder</h2>
        <div className={styles.founderCard}>
          <div className={styles.founderImageWrapper}>
            <img
              src="/sanket.png"
              alt="Sanket Chaudhari"
              className={styles.founderImage}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className={styles.founderInitials} style={{ display: 'none' }}>SC</div>
          </div>
          <div className={styles.founderInfo}>
            <h3>Sanket Chaudhari</h3>
            <span className={styles.founderRole}>Founder & CEO, SmartKrishi</span>
            <p>
              Sanket Chaudhari is the visionary behind SmartKrishi. With a deep passion for
              agriculture and technology, he built SmartKrishi to solve real farming problems
              faced by Indian farmers every day. His mission is to put the power of Artificial
              Intelligence directly in the hands of farmers-making expert crop guidance
              simple, fast, and available in local languages.
            </p>
            <p>
              Coming from a farming background, Sanket understands the challenges farmers face
              and is committed to building solutions that truly make a difference in the field.
            </p>
            <div className={styles.founderTags}>
              <span>🌾 Agriculture</span>
              <span>🤖 AI & Technology</span>
              <span> Made in India</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
