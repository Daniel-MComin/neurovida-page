import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Help from "./components/help";
import About from "./components/about";
import FAQ from "./components/faq";
import Footer from "./components/footer";

export function Home(){
  return (
    <div className="min-h-screen bg-background">
    <main>
      <Hero />
      <Help />
      <About />
      <FAQ />
    </main>
    </div>
  )
}

export default Home;