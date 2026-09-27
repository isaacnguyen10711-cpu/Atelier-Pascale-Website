import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import ScrollToTop from './components/ScrollToTop'
import AboutPage from './pages/AboutPage'
import ArtPage from './pages/ArtPage'
import GiftsPage from './pages/GiftsPage'
import HomePage from './pages/HomePage'
import HomeDecorPage from './pages/HomeDecorPage'
import JewelryPage from './pages/JewelryPage'
import NewArrivalPage from './pages/NewArrivalPage'

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products/new-arrival" element={<NewArrivalPage />} />
        <Route path="/products/home-decor" element={<HomeDecorPage />} />
        <Route path="/products/gifts" element={<GiftsPage />} />
        <Route path="/products/jewelry" element={<JewelryPage />} />
        <Route path="/products/art" element={<ArtPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
