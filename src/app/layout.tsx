import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ISieveTech',
  description: 'The buzz-phrase for what we do is sentiment analysis, but what do we actually do? We crawl the web and identify relevant comments made by news media and by people in their blogs and micro-blogs (such as Twitter), in the comments they make about online videos, in discussion forums and, where publicly accessible, social networks. We use highly sophisticated techniques to identify and extract comments that are relevant to the question you asked and to classify them as being either positive, negative, neutral or balanced. i-sieve Technologies is able to discount references to your company that are irrelevant.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
