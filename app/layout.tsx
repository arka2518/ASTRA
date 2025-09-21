import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Grape_Nuts as Papyrus } from "next/font/google"
import "../globals.css"

const papyrus = Papyrus({
  subsets: ["latin"],
  variable: "--font-papyrus",
  display: "swap",
  weight: "400", // <-- ADD THIS LINE
})

export const metadata: Metadata = {
  title: "StudyMind AI - Your Mystical Study Companion",
  description:
    "Transform any scroll into ancient wisdom, discover curated knowledge, and accelerate your learning with AI-powered mystical study assistance.",
  generator: "StudyMind AI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${papyrus.variable}`}>
      <body className="font-sans antialiased manga-text">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

