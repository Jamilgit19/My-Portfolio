import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"
import { StarField } from "@/components/star-field"
import { HeroSection } from "@/components/hero-section"
import { PortfolioContent } from "@/components/portfolio-content"

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        <StarField />
        <CursorGlow />
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <PortfolioContent />
          <Footer />
        </div>
      </main>
    </>
  )
}
