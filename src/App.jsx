import Benefits from "./components/Benefits";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Popular from "./components/Popular";

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Popular />
      <Benefits />
      <Faq />
    </div>
  )
}