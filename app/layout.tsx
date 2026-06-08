import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { MotionConfig } from "framer-motion"

export const metadata: Metadata = {
  metadataBase: new URL("https://vasanthshetty.dev"),
  title: "Vasanth Shetty — Developer Portfolio",
  description:
    "Monochrome developer portfolio showcasing full-stack systems, hackathon builds, and product-first engineering work.",
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
    title: "Vasanth Shetty — Developer Portfolio",
    description:
      "Monochrome portfolio of a startup-minded full-stack developer. Real systems, real code, shipped products.",
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
    title: "Vasanth Shetty — Developer Portfolio",
    description:
      "Monochrome developer portfolio focused on full-stack systems and shipped product work.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="system">
          <MotionConfig reducedMotion="never">
            {children}
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  )
}
