import Navbar from 'R/components/Navbar'
import Hero from 'R/components/Hero'
import Skills from 'R/components/Skills'
import Projects from 'R/components/Projects'
import Socialmedia from 'R/components/Socialmedia'

export default function Home() {
  return (
    <div>
      <main className='bg-linear-to-r from-gray-900 to-gray-800 text-white'>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Socialmedia />
      </main>
    </div>
  );
}