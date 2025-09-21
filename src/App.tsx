import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import EducationalComponent from "../src/components/Educational/Educational_Component"
import Movies from "./components/Movie/movie"
import "./components/Movie/movie.css"

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <main>
      <EducationalComponent />
      <Movies />

      </main>
      <Footer />
    </div>
  )
}

export default App
