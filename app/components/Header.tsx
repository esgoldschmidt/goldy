import { Roboto } from 'next/font/google'
import Link from 'next/link'

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
})

const Header = () => {

    return (
      <div className='h-18 relative'>
        <div className='flex justify-center gap-12 w-full p-3 uppercase'>
          <Link href="#about" className='ease duration-700 text-gold hover:-translate-y-1'>About</Link>
          <Link href="#development" className='ease duration-700 text-gold hover:-translate-y-1'>&#60; Dev &#62;</Link>
          <Link href="#resume" className='ease duration-700 text-gold hover:-translate-y-1'>Résumé</Link>
          <Link href="#contact" className='ease duration-700 text-gold hover:-translate-y-1'>Contact</Link>
        </div>
        <h1 className={`${roboto.className} text-gold text-4xl absolute right-2 top-2`}>
          Goldy
        </h1>
        
      </div>
    )
  }
  
  export default Header