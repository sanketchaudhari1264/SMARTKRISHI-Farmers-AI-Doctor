import { useState } from 'react'
import styles from '../styles/Doctor.module.css'

export default function Doctor() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [cropName, setCropName] = useState('')
  const [description, setDescription] = useState('')
  const [diagnosis, setDiagnosis] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      setSelectedImage(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setDiagnosis(null)

    try {
      const formData = new FormData()
      formData.append('image', selectedFile)
      formData.append('cropName', cropName.trim())
      formData.append('description', description.trim() || 'No description provided')

      const response = await fetch('http://localhost:5000/api/analyze', {
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
              disabled={!selectedFile || !cropName.trim() || loading}
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
      </section>
    </div>
  )
}