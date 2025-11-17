'use client'

import { useState } from 'react'
import styles from './page.module.css'

const photos = [
  {
    id: 1,
    title: 'Urban Sunset',
    description: 'Shot with iPhone 17 Pro Max • 48MP Main Camera',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    category: 'Cityscape'
  },
  {
    id: 2,
    title: 'Mountain Vista',
    description: 'Shot with iPhone 17 Pro • Ultra Wide Lens',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    category: 'Landscape'
  },
  {
    id: 3,
    title: 'Ocean Waves',
    description: 'Shot with iPhone 17 • Action Mode',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    category: 'Nature'
  },
  {
    id: 4,
    title: 'Night Portrait',
    description: 'Shot with iPhone 17 Pro Max • Night Mode',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    category: 'Portrait'
  },
  {
    id: 5,
    title: 'Autumn Leaves',
    description: 'Shot with iPhone 17 • Macro Photography',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    category: 'Macro'
  },
  {
    id: 6,
    title: 'City Lights',
    description: 'Shot with iPhone 17 Pro • ProRAW Format',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    category: 'Urban'
  },
  {
    id: 7,
    title: 'Desert Dreams',
    description: 'Shot with iPhone 17 • Cinematic Mode',
    gradient: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
    category: 'Landscape'
  },
  {
    id: 8,
    title: 'Rainy Day',
    description: 'Shot with iPhone 17 Pro • Telephoto Lens',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    category: 'Street'
  },
  {
    id: 9,
    title: 'Golden Hour',
    description: 'Shot with iPhone 17 Pro Max • Photonic Engine',
    gradient: 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)',
    category: 'Portrait'
  }
]

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <svg width="30" height="36" viewBox="0 0 30 36" fill="none">
            <path d="M24.5 9.5C22.5 7 19.5 5.5 16 5.5C10.5 5.5 6 10 6 15.5C6 21 10.5 25.5 16 25.5C19.5 25.5 22.5 24 24.5 21.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="15.5" r="3" fill="white"/>
          </svg>
        </div>
        <h1 className={styles.title}>iPhone 17 Photography</h1>
        <p className={styles.subtitle}>Professional-grade photos from your pocket</p>
      </header>

      <div className={styles.gallery}>
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={styles.photoCard}
            onClick={() => setSelectedPhoto(photo.id)}
            style={{ background: photo.gradient }}
          >
            <div className={styles.photoOverlay}>
              <div className={styles.photoContent}>
                <span className={styles.category}>{photo.category}</span>
                <h3 className={styles.photoTitle}>{photo.title}</h3>
                <p className={styles.photoDescription}>{photo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className={styles.modal}
          onClick={() => setSelectedPhoto(null)}
        >
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>
            {photos.find(p => p.id === selectedPhoto) && (
              <div
                className={styles.modalPhoto}
                style={{ background: photos.find(p => p.id === selectedPhoto)!.gradient }}
              >
                <div className={styles.modalInfo}>
                  <h2>{photos.find(p => p.id === selectedPhoto)!.title}</h2>
                  <p>{photos.find(p => p.id === selectedPhoto)!.description}</p>
                  <div className={styles.specs}>
                    <div className={styles.spec}>
                      <span className={styles.specLabel}>Resolution</span>
                      <span className={styles.specValue}>48MP</span>
                    </div>
                    <div className={styles.spec}>
                      <span className={styles.specLabel}>Aperture</span>
                      <span className={styles.specValue}>ƒ/1.5</span>
                    </div>
                    <div className={styles.spec}>
                      <span className={styles.specLabel}>ISO</span>
                      <span className={styles.specValue}>400</span>
                    </div>
                    <div className={styles.spec}>
                      <span className={styles.specLabel}>Shutter</span>
                      <span className={styles.specValue}>1/120s</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <section className={styles.features}>
        <h2 className={styles.featuresTitle}>Revolutionary Camera System</h2>
        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>📸</div>
            <h3>48MP Main Camera</h3>
            <p>Capture stunning detail with next-gen sensor technology</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🌙</div>
            <h3>Enhanced Night Mode</h3>
            <p>Brilliant low-light photos with advanced AI processing</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🎬</div>
            <h3>Cinematic Mode</h3>
            <p>Professional-grade video with automatic focus transitions</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔬</div>
            <h3>Macro Photography</h3>
            <p>Discover incredible detail in the smallest subjects</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 iPhone 17 Photography Showcase</p>
        <p className={styles.footerNote}>All photos simulated for demonstration purposes</p>
      </footer>
    </main>
  )
}
