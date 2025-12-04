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
import { SignIn, SignUp, UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

function App() {
  const { pathname } = useLocation()
  const routeKey = pathname === '/' ? 'home' : pathname.slice(1).split('/')[0]

  return (
    <div className={`app route-${routeKey}`}>
      <div className="top-container">
        <Header />
        <NavBar />

        {/* Login / User menu */}
        <div style={{ position: "absolute", top: 20, right: 20 }}>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="redirect">
              <button
                style={{
                  fontSize: "18px",
                  color: "white",
                  background: "none",
                  border: "1px solid white",
                  padding: "6px 12px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Login
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>

      <main>
        <Routes>

          {/* Auth Routes */}
          <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" />} />

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/educational" element={<EducationalComponent />} />
          <Route path="/funfacts" element={<FunFacts />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/music" element={<Music />} />

          {/* Protected Route */}
          <Route
            path="/liked"
            element={
              <>
                <SignedIn>
                  <LikedPage />
                </SignedIn>

                <SignedOut>
                  <Navigate to="/sign-in" />
                </SignedOut>
              </>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
