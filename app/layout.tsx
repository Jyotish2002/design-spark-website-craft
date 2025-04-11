/* eslint-disable react-refresh/only-export-components */
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Career Counseling Platform',
  description: 'Get personalized career guidance from experienced counselors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
} 