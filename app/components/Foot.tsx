'use client';
import React from 'react'
import { Footer } from 'flowbite-react';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
})
type Props = {}

function Foot({}: Props) {
  return (
    <Footer container className='bg-transparent dark:bg-transparent rounded-none shadow-none'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        
          <a className={`${roboto.className} text-gold text-4xl`} href="#">
            Goldy
          </a>
        
           
          <Footer.LinkGroup className='flex gap-3 justify-center'>
            <Footer.Link href="#about" className='text-gold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] link_no_under ease duration-700 hover:-translate-y-1'>
              About
            </Footer.Link>
            <Footer.Link href="#development" className='text-gold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ease duration-700 hover:-translate-y-1'>
              Development
            </Footer.Link>
            <Footer.Link href="#resume" className='text-gold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ease duration-700 hover:-translate-y-1'>
              Résumé
            </Footer.Link>
            <Footer.Link href="#contact" className='text-gold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ease duration-700 hover:-translate-y-1'>
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className='border-gray-300 dark:border-gray-600' />
        <Footer.Copyright
          by="E. Goldschmidt"
          href="#"
          year={2023}
          className='text-gold dark:text-gold uppercase [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'
        />
      </div>
    </Footer>
  )
}

export default Foot