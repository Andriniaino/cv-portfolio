import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MAHASOANIRAINY Jaonarivelo - Administrateur Systèmes & Réseaux",
  description:
    "Portfolio professionnel - Administrateur Systèmes & Réseaux  avec expertise en full-stack development",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${_geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
