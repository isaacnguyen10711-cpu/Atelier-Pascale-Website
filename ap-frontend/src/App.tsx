import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import AboutPage from './pages/AboutPage'
import CategoryPage from './pages/CategoryPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products/:categoryName" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
