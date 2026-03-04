import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>SMARTKRISHI</h1>
            <p className={styles.subtitle}>Your Smart Crop Doctor & Farming Assistant</p>
            <div className={styles.buttonGroup}>
              <Link href="/doctor" className={styles.btnPrimary}>Start</Link>
              <Link href="/about" className={styles.btnSecondary}>About</Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="/plant-hand.png" alt="Hand holding plant seedling" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <h2 className={styles.sectionTitle}>Who is Smartkrishi ?</h2>
        
        <div className={styles.infoBox}>
          <p>
            SmartKrishi is a smart farming assistant that helps farmers identify crop diseases, 
            understand crop problems, and get the right guidance for better farming. Just upload 
            a crop photo or describe the problem, and SmartKrishi will tell you what is happening, 
            what to do next, which fertilizer to use, and how to prevent the problem in the future 
            in simple and local language.
          </p>
        </div>

        <div className={styles.infoBox}>
          <p>
            <strong>SmartKrishi</strong> हे एक स्मार्ट शेती सहाय्यक आहे जे शेतकऱ्यांना पिकांमधील रोग ओळखण्यास, 
            पिकाच्या समस्या समजून घेण्यास आणि चांगल्या शेतीसाठी योग्य मार्गदर्शन मिळण्यास मदत करते. फक्त तुमच्या 
            पिकाचा फोटो अपलोड करा किंवा समस्या लिहा, आणि <strong>SmartKrishi</strong> तुम्हाला सांगेल की पिकाला 
            काय झाले आहे, पुढे काय करायचं, कोणतं खतं वापरावं आणि भविष्यात ही समस्या कशी टाळावी — 
            तेही सोप्या आणि स्थानिक भाषेत.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className={styles.stepsSection}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.stepsGrid}>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#2d7a4f" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
              </svg>
            </div>
            <h3>Upload Photo</h3>
            <p>Take a clear photo of your crop or plant and upload it directly from your phone or computer.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#2d7a4f" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </div>
            <h3>AI Analysis</h3>
            <p>SmartKrishi analyzes the image to detect diseases, pests, and nutrient deficiencies instantly.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#2d7a4f" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
              </svg>
            </div>
            <h3>Get Diagnosis</h3>
            <p>Receive a clear report showing the disease name, severity level, and what is causing the problem.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>04</div>
            <div className={styles.stepIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#2d7a4f" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
              </svg>
            </div>
            <h3>Treatment Advice</h3>
            <p>Follow step-by-step treatment instructions and get the right fertilizer recommendation for your crop.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>05</div>
            <div className={styles.stepIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#2d7a4f" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg>
            </div>
            <h3>Prevent Future Problems</h3>
            <p>Learn expert prevention tips to protect your crops from recurring diseases and improve your yield.</p>
          </div>

        </div>
      </section>
    </div>
  )
}
