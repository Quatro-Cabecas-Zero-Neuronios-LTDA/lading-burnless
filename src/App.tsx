import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import Problem from './components/Problem.tsx'
import Features from './components/Features.tsx'
import DashboardPreview from './components/DashboardPreview.tsx'
import HowItWorks from './components/HowItWorks.tsx'
import Audience from './components/Audience.tsx'
import Safety from './components/Safety.tsx'
import FAQ from './components/FAQ.tsx'
import CTA from './components/CTA.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <DashboardPreview />
        <HowItWorks />
        <Audience />
        <Safety />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
