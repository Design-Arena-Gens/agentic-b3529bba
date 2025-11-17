import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'iPhone 17 Photography',
  description: 'Stunning photos captured with iPhone 17',
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
