import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

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
  openGraph: {
    title: "Vasanth Shetty — Full-Stack Developer & Builder",
    description:
      "Portfolio of a startup-minded full-stack developer. Real projects, real code, shipped products.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, jetbrainsMono.variable)}
    >
      <body>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}
