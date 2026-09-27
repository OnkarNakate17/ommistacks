import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { AboutPage } from './pages/About'
import { SkillsPage } from './pages/Skills'
import { ProjectsPage } from './pages/Projects'
import { ContentPageRoute } from './pages/ContentPage'
import { ExperiencePage } from './pages/Experience'
import { ContactPage } from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

function App() {

  return (
    <HashRouter>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
        <a
          href="#main"
          className="fixed left-2 top-2 z-50 -translate-y-16 rounded-md bg-ommi-yellow px-4 py-2 text-sm font-medium text-[#06120e] transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <ScrollToTop />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/content" element={<ContentPageRoute />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
