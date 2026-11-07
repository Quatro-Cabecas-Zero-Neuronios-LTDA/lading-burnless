import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import Highlights from './components/Highlights.tsx'
import Bento from './components/Bento.tsx'
import DashboardPreview from './components/DashboardPreview.tsx'
import HowItWorks from './components/HowItWorks.tsx'
import Stories from './components/Stories.tsx'
import Safety from './components/Safety.tsx'
import Science from './components/Science.tsx'
import FAQ from './components/FAQ.tsx'
import CTA from './components/CTA.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Bento />
        <DashboardPreview />
        <HowItWorks />
        <Stories />
        <Safety />
        <Science />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
