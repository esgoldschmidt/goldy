import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Providers } from './components/providers'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Goldy | Web Dev by Eric Goldschmidt',
  description: 'Web Dev by Eric Goldschmidt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}  id='main'>
      <body className={`{montserrat.className} bg-white text-gray-700 dark:bg-gray-800 dark:text-white flex justify-center m-3 relative`}>
        <div className='max-w-7xl'>
          <Providers>
            {children}
          </Providers>
        </div>
        <img src='https://media.graphassets.com/IeQ1AMWmQqGg4LTJNsQv' className="z-0 opacity-50 md:opacity-100 fixed right-0 bottom-0 max-h-full object-contain" ></img>
      </body>
    </html>
  )
}
