import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Footer from "./components/Footer/Footer"
import EducationalComponent from "../src/components/Educational/Educational_Component"
import Movies from "./components/Movie/movie"
import "./components/Movie/movie.css"
import FunFacts from "./components/FunFacts/FunFacts"
import Music from "./components/Music/Music"

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <main>
      <Music />
      <EducationalComponent />
      <Movies />
      <FunFacts />
      </main>
      <Footer />
    </div>
  )
}
        
export default App
