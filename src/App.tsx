import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Footer from "./components/Footer/Footer"
import EducationalComponent from "./components/Educational/Educational_Component"
import Movies from "./components/Movie/movie"
import "./components/Movie/movie.css"
import FunFacts from "./components/FunFacts/FunFacts"
import Music from "./components/Music/Music"
import Home from "./components/Home/Home"
import LikedPage from "./components/Liked/LikedPage"

import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

function App() {
  const { pathname } = useLocation()
  const routeKey = pathname === '/' ? 'home' : pathname.slice(1).split('/')[0]

  return (
    <div className={`app route-${routeKey}`}>
      <div className="top-container">
        <Header />
        <NavBar />
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/educational" element={<EducationalComponent />} />
          <Route path="/funfacts" element={<FunFacts />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/music" element={<Music />} />
          <Route path="/liked" element={<LikedPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
