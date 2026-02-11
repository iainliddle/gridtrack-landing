import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { SocialProof } from './components/SocialProof'
import { PainPoints } from './components/PainPoints'
import { FeaturesSection } from './components/FeaturesSection'
import { HowItWorks } from './components/HowItWorks'
import { PricingSection } from './components/PricingSection'
import { FAQSection } from './components/FAQSection'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <SocialProof />
      <PainPoints />
      <FeaturesSection />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
