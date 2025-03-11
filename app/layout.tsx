import './globals.css'
import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather'
})

export const metadata: Metadata = {
  title: 'Manus',
  description: 'Manus is a general AI agent that bridges minds and actions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
