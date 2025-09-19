import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import EducationalComponent from "../src/components/Educational/Educational_Component"



function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <main>
      <EducationalComponent />

      </main>
      <Footer />
    </div>
  )
}

export default App
