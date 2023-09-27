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
      <body className={`{montserrat.className} bg-white text-gray-700 dark:bg-gray-800 dark:text-white flex justify-center `}>
        <div className='max-w-7xl'>
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}
