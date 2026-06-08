import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Script from "next/script"
import { MotionConfig } from "framer-motion"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://vasanthshetty.dev"),
  title: "Vasanth Shetty — Full-Stack Developer & Builder",
  description:
    "BCA student building AI-assisted full-stack products for startup environments. Projects include MakerHQ, AgroShare, Scam Guard, and CogniVault.",
  keywords: [
    "Vasanth Shetty",
    "full-stack developer",
    "BCA student",
    "portfolio",
    "Next.js",
    "React",
    "startup developer",
    "AI-assisted development",
  ],
  authors: [{ name: "Vasanth Shetty" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vasanth Shetty — Full-Stack Developer & Builder",
    description:
      "Portfolio of a startup-minded full-stack developer. Real projects, real code, shipped products.",
    url: "https://vasanthshetty.dev",
    siteName: "Vasanth Shetty Portfolio",
    images: [
      {
        url: "/headshot.png",
        width: 800,
        height: 800,
        alt: "Vasanth Shetty",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasanth Shetty — Full-Stack Developer & Builder",
    description:
      "BCA student building AI-assisted full-stack products for startup environments.",
    images: ["/headshot.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vasanth Shetty",
    "jobTitle": "Full-Stack Developer",
    "url": "https://vasanthshetty.dev",
    "sameAs": [
      "https://github.com/vasanthshettyy",
      "https://linkedin.com/in/vasanthshettyy"
    ],
    "knowsAbout": [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PHP",
      "MySQL",
      "Supabase",
      "System Architecture",
      "AI-Assisted Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Bachelor of Computer Applications (BCA)"
    }
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, jetbrainsMono.variable)}
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark">
          <MotionConfig reducedMotion="never">
            {children}
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  )
}
