import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ThemeToggleButton from "@/components/theme-toggle-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <ThemeToggleButton />
    </main>
  )
}
