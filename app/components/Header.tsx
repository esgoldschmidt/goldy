import { Roboto } from 'next/font/google'
import Link from 'next/link'

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
})

const Header = () => {

    return (
      <div className='md:h-18 relative flex flex-col md:flex-row max-w-screen'>
        {/* <h1 className={`${roboto.className} text-gold text-4xl pl-3 md:absolute right-2 top-2`}>
          Goldy
        </h1> */}
        <div className='flex justify-center gap-4 md:gap-12 w-full p-3 uppercase'>
          <Link href="#about" className='ease text-sm md:text-base duration-700 text-gold hover:-translate-y-1'>About</Link>
          <Link href="#development" className='ease text-sm md:text-base duration-700 text-gold hover:-translate-y-1'>Development</Link>
          <Link href="#resume" className='ease text-sm md:text-base duration-700 text-gold hover:-translate-y-1'>Resume</Link>
          <Link href="#contact" className='ease text-sm md:text-base duration-700 text-gold hover:-translate-y-1'>Contact</Link>
        </div>
        
        
      </div>
    )
  }
  
  export default Header