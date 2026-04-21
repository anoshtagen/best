import React from 'react'
import ReactDOM from 'react-dom/client'
import { SplineSceneBasic } from './demo'
import { ServicesSection } from './services-section'
import { Features } from '@/components/ui/features'
import { StatsSection } from './stats-section'
import { RadialOrbitalTimelineDemo } from './timeline-demo'
import { RadarEffectDemo } from './radar-demo'
import '../index.css'

// Mount Hero
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SplineSceneBasic />
  </React.StrictMode>
)

// Mount Features
const featuresRoot = document.getElementById('features-root');
if (featuresRoot) {
  ReactDOM.createRoot(featuresRoot as HTMLElement).render(
    <React.StrictMode>
      <Features />
    </React.StrictMode>
  )
}

// Mount Stats
const statsRoot = document.getElementById('stats-root');
if (statsRoot) {
  ReactDOM.createRoot(statsRoot as HTMLElement).render(
    <React.StrictMode>
      <StatsSection />
    </React.StrictMode>
  )
}

// Mount Timeline
const timelineRoot = document.getElementById('timeline-root');
if (timelineRoot) {
  ReactDOM.createRoot(timelineRoot as HTMLElement).render(
    <React.StrictMode>
      <RadialOrbitalTimelineDemo />
    </React.StrictMode>
  )
}

// Mount Services
const servicesRoot = document.getElementById('services-root');
if (servicesRoot) {
  ReactDOM.createRoot(servicesRoot as HTMLElement).render(
    <React.StrictMode>
      <ServicesSection />
    </React.StrictMode>
  )
}

// Mount Radar Ecosystem
const radarRoot = document.getElementById('radar-root');
if (radarRoot) {
  ReactDOM.createRoot(radarRoot as HTMLElement).render(
    <React.StrictMode>
      <RadarEffectDemo />
    </React.StrictMode>
  )
}

