import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
// Don't use next/head in the App Router root layout. Use a plain <head> element instead.
import "./globals.css"
import Navbar from "@/components/navbar"
import { SITE_TITLE, SITE_DESCRIPTION, SITE_ROLE } from "@/components/site-metadata"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pujon.info"
const DEFAULT_IMAGE = "/logo.png"

const COMPOSED_TITLE = `${SITE_TITLE} — ${SITE_ROLE}`

export const metadata: Metadata = {
  title: COMPOSED_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: COMPOSED_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    images: [
      {
        url: DEFAULT_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: COMPOSED_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_IMAGE],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Compose title from SITE_TITLE and SITE_ROLE
  const title = (metadata.title as string) || COMPOSED_TITLE
  const description = (metadata.description as string) || SITE_DESCRIPTION
  // Normalize openGraph images which can be OGImage or OGImage[] per Next.js types
  const ogImages = metadata.openGraph?.images
  let image = DEFAULT_IMAGE
  if (ogImages) {
    if (Array.isArray(ogImages)) {
      image = (ogImages[0] as any)?.url ?? DEFAULT_IMAGE
    } else {
      image = (ogImages as any)?.url ?? DEFAULT_IMAGE
    }
  }

  return (
    <html lang="en">
      <head>
        {/* Fallback meta tags for crawlers that don't use next's metadata */}
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#0ea5a2" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${SITE_URL}${image}`} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}${image}`} />
  </head>
      <body className={`font-mono antialiased`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
