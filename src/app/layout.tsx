import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingQRCodes } from '@/components/floating-qrcodes'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '科虎AI - AI绘画、AI视频、AI编程、AI配音、AI写作、AI工具、AI变现',
  description: '专注于AI领域的学习和实践，提供全面的AI工具和教程',
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        href: '/images/logo.png',
      },
    ],
    shortcut: ['/images/logo.png'],
    apple: ['/images/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingQRCodes />
      </body>
    </html>
  )
} 