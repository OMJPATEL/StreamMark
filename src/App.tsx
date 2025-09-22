import './App.css'
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Music from "./components/Music/Music"

function App() {
  return (
    <div>
      <div>
        <Header />
        <NavBar />
        <main>
        <Music />
        </main>
        <Footer />
      </div>

      <div id="music" style={{ display: 'none' }}>
      </div>
    </div>
  )
}

export default App
