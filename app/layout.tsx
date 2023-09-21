import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Providers } from './components/providers'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Goldy | Dev by Eric Goldschidt',
  description: 'Web Development by Eric Goldschmidt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={montserrat.className}>
        <Providers>
          {children}
        </Providers> 
      </body>
    </html>
  )
}
