import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProjectGrid from '@/components/ProjectGrid'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-cream">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <Services />
      <About />
      <Contact />
    </main>
  )
}
