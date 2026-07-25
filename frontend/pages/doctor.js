import { useState } from 'react'
import styles from '../styles/Doctor.module.css'
import { useLanguage } from '@/context/LanguageContext'

const bananaLeafBlight = {
  mr: {
    disease: 'केळी पान ब्लाइट (Banana Leaf Blight / Leaf Spot Disease)', type: 'बुरशीजन्य रोग', crop: 'केळी', part: 'पाने',
    why: 'हा रोग बुरशीमुळे होतो. उष्ण आणि दमट हवामानात बुरशीची वाढ जलद होते आणि ती पानांवर संसर्ग करते.',
    reasons: ['जास्त आर्द्रता (Humidity)', 'सतत पाऊस', 'पानांवर जास्त वेळ पाणी राहणे', 'झाडांमध्ये कमी अंतर', 'संक्रमित पाने न काढणे', 'शेतात स्वच्छतेचा अभाव', 'योग्य निचरा नसणे'],
    symptoms: ['पानांवर तपकिरी किंवा काळे डाग', 'डागांच्या भोवती पिवळसर किनार', 'पाने वाळणे व जळाल्यासारखी दिसणे', 'प्रकाशसंश्लेषण कमी होणे', 'झाडाची वाढ मंदावणे', 'फळांचे उत्पादन कमी होणे', 'रोग इतर झाडांमध्ये पसरणे'],
    management: ['संक्रमित पाने काढून नष्ट करा.', 'झाडांमध्ये योग्य अंतर ठेवा.', 'शेत स्वच्छ ठेवा.', 'पानांवर जास्त वेळ पाणी राहू देऊ नका.', 'चांगला निचरा ठेवा.'],
    biological: 'Trichoderma harzianum वापरा. नीम (कडुनिंब) आधारित जैविक फवारणी करा.', chemical: ['Mancozeb 75% WP', 'Copper Oxychloride', 'Propiconazole', 'Azoxystrobin'],
    labels: { result: 'केळी पान ब्लाइट नमुना निदान', type: 'प्रकार', crop: 'प्रभावित पीक', part: 'प्रभावित भाग', why: 'का होतो?', reasons: 'कारणे', symptoms: 'समस्या / लक्षणे', solution: 'उपाय', management: 'शेती व्यवस्थापन', biological: 'जैविक उपाय', chemical: 'रासायनिक उपाय', products: 'शिफारस केलेली उत्पादने', product: 'उत्पादन', use: 'उपयोग' },
    products: [['Mancozeb 75% WP', 'बुरशी नियंत्रण'], ['Copper Oxychloride', 'बुरशी प्रतिबंध'], ['Propiconazole', 'रोगाचा प्रसार थांबवणे'], ['Azoxystrobin', 'पानांचे संरक्षण'], ['Trichoderma harzianum', 'जैविक नियंत्रण'], ['Neem Oil', 'सुरुवातीच्या अवस्थेतील नियंत्रण']]
  },
  hi: {
    disease: 'केला पत्ती झुलसा रोग (Banana Leaf Blight / Leaf Spot Disease)', type: 'फफूंद जनित रोग', crop: 'केला', part: 'पत्तियाँ',
    why: 'यह रोग फफूंद के कारण होता है। गर्म और अधिक नमी वाले वातावरण में फफूंद तेजी से बढ़ती है और पत्तियों को संक्रमित कर देती है।',
    reasons: ['अधिक नमी (Humidity)', 'लगातार वर्षा', 'पत्तियों पर लंबे समय तक पानी रहना', 'पौधों के बीच कम दूरी', 'संक्रमित पत्तियाँ न हटाना', 'खेत की सफाई न होना', 'जल निकासी की कमी'],
    symptoms: ['पत्तियों पर भूरे या काले धब्बे', 'धब्बों के चारों ओर पीला घेरा', 'पत्तियाँ सूखना और जली हुई दिखाई देना', 'प्रकाश संश्लेषण कम होना', 'पौधे की वृद्धि रुकना', 'फल उत्पादन कम होना', 'रोग का अन्य पौधों में फैलना'],
    management: ['संक्रमित पत्तियाँ काटकर नष्ट करें।', 'पौधों के बीच उचित दूरी रखें।', 'खेत को साफ रखें।', 'पत्तियों पर लंबे समय तक पानी न रहने दें।', 'अच्छी जल निकासी की व्यवस्था करें।'],
    biological: 'Trichoderma harzianum का उपयोग करें। नीम आधारित जैविक स्प्रे करें।', chemical: ['Mancozeb 75% WP', 'Copper Oxychloride', 'Propiconazole', 'Azoxystrobin'],
    labels: { result: 'केला पत्ती झुलसा नमूना निदान', type: 'प्रकार', crop: 'प्रभावित फसल', part: 'प्रभावित भाग', why: 'क्यों होता है?', reasons: 'कारण', symptoms: 'समस्या / लक्षण', solution: 'समाधान', management: 'कृषि प्रबंधन', biological: 'जैविक उपचार', chemical: 'रासायनिक उपचार', products: 'अनुशंसित उत्पाद', product: 'उत्पाद', use: 'उपयोग' },
    products: [['Mancozeb 75% WP', 'फफूंद नियंत्रण'], ['Copper Oxychloride', 'रोग की रोकथाम'], ['Propiconazole', 'रोग का फैलाव रोकता है'], ['Azoxystrobin', 'पत्तियों की सुरक्षा'], ['Trichoderma harzianum', 'जैविक नियंत्रण'], ['Neem Oil', 'शुरुआती अवस्था में नियंत्रण']]
  }
}

export default function Doctor() {
  const { language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [cropName, setCropName] = useState('')
  const [description, setDescription] = useState('')
  const [diagnosis, setDiagnosis] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sampleDiagnosis, setSampleDiagnosis] = useState(null)
  const [isBananaSample, setIsBananaSample] = useState(false)
  const sample = bananaLeafBlight[language === 'hi' ? 'hi' : 'mr']

  const showBananaSample = () => {
    setSelectedImage('/Banana.jpg')
    setSelectedFile(null)
    setCropName(language === 'hi' ? 'केला' : 'केळी')
    setDescription('')
    setDiagnosis(null)
    setError('')
    setSampleDiagnosis(null)
    setIsBananaSample(true)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      setSelectedImage(URL.createObjectURL(file))
      setSampleDiagnosis(null)
      setIsBananaSample(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setDiagnosis(null)
    setSampleDiagnosis(null)

    if (isBananaSample) {
      setSampleDiagnosis(sample)
      setLoading(false)
      return
    }

    try {
      const formData = new FormData()
      formData.append('image', selectedFile)
      formData.append('cropName', cropName.trim())
      formData.append('description', description.trim() || 'No description provided')

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
      const response = await fetch(`${apiUrl}/api/analyze`, {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Analysis failed')
      }

      setDiagnosis(data.diagnosis)
    } catch (err) {
      setError(err.message || 'Something went wrong. Make sure backend is running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1 className={styles.pageTitle}>Crop Doctor</h1>
        <p className={styles.heroSubtitle}>Upload your crop photo for instant diagnosis</p>
      </section>

      <section className={styles.mainSection}>
        <div className={styles.uploadSection}>
          <h2>Diagnose Your Crop</h2>

          <button type="button" className={styles.sampleButton} onClick={showBananaSample}>
            Use Banana Leaf Blight Sample
          </button>

          <form onSubmit={handleSubmit} className={styles.form}>

            <div className={styles.uploadArea}>
              <label htmlFor="imageUpload" className={styles.uploadLabel}>
                {selectedImage ? (
                  <img src={selectedImage} alt="Selected crop" className={styles.previewImage} />
                ) : (
                  <div className={styles.uploadPlaceholder}>
                    <p>Click to upload crop image</p>
                    <span>or drag and drop</span>
                  </div>
                )}
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className={styles.fileInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="cropName">Crop Name *</label>
              <input
                id="cropName"
                type="text"
                placeholder="e.g. tomato, rice, wheat"
                value={cropName}
                onChange={(e) => setCropName(e.target.value)}
                className={styles.textarea}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description">Describe the Problem (Optional)</label>
              <textarea
                id="description"
                rows="4"
                placeholder="Describe what you're seeing on your crop..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.textarea}
              />
            </div>

            {error && <p className={styles.errorMessage}>{error}</p>}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={(!selectedFile && !isBananaSample) || !cropName.trim() || loading}
            >
              {loading ? 'Analyzing...' : 'Diagnose Crop'}
            </button>
          </form>
        </div>

        {diagnosis && (
          <div className={styles.resultsSection}>
            <h2>Diagnosis Results</h2>

            <div className={styles.resultCard}>
              <h3>Detected Disease</h3>
              <p className={styles.diseaseName}>{diagnosis.disease}</p>
            </div>

            <div className={styles.resultCard}>
              <h3>Severity Level</h3>
              <p className={styles.severity}>{diagnosis.severity}</p>
            </div>

            <div className={styles.resultCard}>
              <h3>Recommended Treatment</h3>
              <p>{diagnosis.treatment}</p>
            </div>

            <div className={styles.resultCard}>
              <h3>Fertilizer Recommendation</h3>
              <p>{diagnosis.fertilizer}</p>
            </div>

            <div className={styles.resultCard}>
              <h3>Prevention Tips</h3>
              <p>{diagnosis.prevention}</p>
            </div>
          </div>
        )}

        {sampleDiagnosis && <section className={styles.sampleResults}>
          <div className={styles.sampleHeading}><img src="/Banana.jpg" alt="Banana leaf affected by leaf blight" /><div><p>Sample result</p><h2>{sampleDiagnosis.labels.result}</h2></div></div>
          <div className={styles.detailGrid}>
            <div><strong>{sampleDiagnosis.labels.type}</strong><span>{sampleDiagnosis.type}</span></div><div><strong>{sampleDiagnosis.labels.crop}</strong><span>{sampleDiagnosis.crop}</span></div><div><strong>{sampleDiagnosis.labels.part}</strong><span>{sampleDiagnosis.part}</span></div>
          </div>
          <article className={styles.detailCard}><h3>{sampleDiagnosis.labels.why}</h3><p>{sampleDiagnosis.why}</p></article>
          <article className={styles.detailCard}><h3>{sampleDiagnosis.labels.reasons}</h3><ul>{sampleDiagnosis.reasons.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className={styles.detailCard}><h3>{sampleDiagnosis.labels.symptoms}</h3><ul>{sampleDiagnosis.symptoms.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className={styles.detailCard}><h3>{sampleDiagnosis.labels.solution}</h3><h4>{sampleDiagnosis.labels.management}</h4><ul>{sampleDiagnosis.management.map((item) => <li key={item}>{item}</li>)}</ul><h4>{sampleDiagnosis.labels.biological}</h4><p>{sampleDiagnosis.biological}</p><h4>{sampleDiagnosis.labels.chemical}</h4><ul>{sampleDiagnosis.chemical.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className={styles.detailCard}><h3>{sampleDiagnosis.labels.products}</h3><div className={styles.tableWrap}><table><thead><tr><th>{sampleDiagnosis.labels.product}</th><th>{sampleDiagnosis.labels.use}</th></tr></thead><tbody>{sampleDiagnosis.products.map(([product, use]) => <tr key={product}><td>{product}</td><td>{use}</td></tr>)}</tbody></table></div></article>
        </section>}
      </section>
    </div>
  )
}
