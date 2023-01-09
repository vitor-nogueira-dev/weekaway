import Activities from "./components/Activities";
import Booking from "./components/Booking";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";

export default function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Contato />
      <Footer />
    </div>
  )
}