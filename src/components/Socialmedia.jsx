
import { AiFillLinkedin } from 'react-icons/ai'

export default function Socialmedia() {
  return (
    <footer  id="Socialmedia" className='py-10 flex justify-center gap-6'>
      <a href="https://www.linkedin.com/in/hector-hidalgo-diaz/" aria-label="LinkedIn" className='text-5xl text-blue-700 hover:text-blue-500 transition-colors'>
        <AiFillLinkedin />
      </a>
    </footer>
  )
}