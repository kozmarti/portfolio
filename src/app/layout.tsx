import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Marta Kozma | Full-Stack Web Developer in Bordeaux, France'

const description =
    "Full-stack developer in JavaScript, React, Next.js, Python, Django, Flask, and FastAPI. I create responsive, scalable web and mobile apps."
const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Marta Kozma Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@Basit_Miyanji',
  },
  verification: {
    google: 'Xy4-Fm4IpvJ-9cSnHNaP7T3OLw0X-jmRMeqLJNzyf0I',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <Analytics/>
        <ThemeMenu />
        <Footer />
      </body>
    </html>
  )
}
