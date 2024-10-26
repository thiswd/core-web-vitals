import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Core Web Vitals',
  description: 'Core Web Vitals Resources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
