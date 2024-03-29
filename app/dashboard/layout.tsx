import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
   user,
   team,
}: {
  children: React.ReactNode
  user: React.ReactNode
  team: React.ReactNode
}) {
  return (
      <html>
      <body className={inter.className}>{children}{user}{team}</body>
      </html>
  )
}
