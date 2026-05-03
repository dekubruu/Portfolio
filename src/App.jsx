import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import CV from './pages/CV'
import ProjetProfessionnel from './pages/ProjetProfessionnel'
import Portfolio from './pages/Portfolio'
import ThemeDetail from './pages/ThemeDetail'


function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projet-professionnel" element={<ProjetProfessionnel />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ThemeDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
