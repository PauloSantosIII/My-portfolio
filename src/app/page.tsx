import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const Home = () => {
  return (
    <main className='overflow-x-hidden bg-primary text-white'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className='py-8 text-center text-white/60 border-t border-secondary-transparent'>
        © {new Date().getFullYear()} Paulo Santos III. Todos os direitos reservados.
      </footer>
    </main>
  )
}

export default Home
