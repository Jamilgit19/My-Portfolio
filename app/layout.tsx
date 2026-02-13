import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jamil-portfolio.vercel.app'),
  title: {
    default: "MD Jamil — Full Stack Web Developer",
    template: "%s | MD Jamil",
  },
  description:
    "Full Stack Web Developer with 1+ years of experience. Specialized in React.js, Node.js, and modern web technologies. Based in Dhaka, Bangladesh.",
  keywords: ["Full Stack Developer", "Web Development", "React.js", "Node.js", "JavaScript", "MongoDB", "Express.js", "RESTful APIs"],
  authors: [{ name: "MD Jamil", url: "https://github.com" }],
  creator: "MD Jamil",
  publisher: "MD Jamil",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "MD Jamil — Full Stack Web Developer",
    description: "Full Stack Web Developer with 1+ years of experience. Specialized in React.js, Node.js, and modern web technologies.",
    siteName: "MD Jamil",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MD Jamil Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Jamil — Full Stack Web Developer",
    description: "Full Stack Web Developer with 1+ years of experience in building scalable web applications.",
    creator: "@jamil",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
