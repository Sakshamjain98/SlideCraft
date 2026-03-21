import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SlideCraft",
  description: "Web-based SlideCraft editor",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background text-foreground">
            <header className="w-full border-b border-border bg-card/60 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
                <h1 className="text-lg font-semibold">SlideCraft</h1>
                <p className="text-sm text-muted-foreground/80">Edit and export slides in-browser</p>
              </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
