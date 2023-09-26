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
    <Footer container className='bg-white dark:bg-gray-800'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        
          <h1 className={`${roboto.className} text-gold text-4xl`}>
            Goldy
          </h1>
        
           
          <Footer.LinkGroup>
            <Footer.Link href="#about" className='text-gold link_no_under'>
              About
            </Footer.Link>
            <Footer.Link href="#development" className='text-gold'>
              &#60; Dev &#62;
            </Footer.Link>
            <Footer.Link href="#resume" className='text-gold'>
              Résumé
            </Footer.Link>
            <Footer.Link href="#contact" className='text-gold'>
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className='border-gray-300 dark:border-gray-600' />
        <Footer.Copyright
          by="E. Goldschmidt"
          href="#"
          year={2023}
          className='text-gray-700 dark:text-white'
        />
      </div>
    </Footer>
  )
}

export default Foot