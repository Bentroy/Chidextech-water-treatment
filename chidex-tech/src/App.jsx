import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Audience from './components/Audience'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Audience />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
