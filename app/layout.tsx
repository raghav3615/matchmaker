import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import type React from "react"
import { Github, Twitter, Linkedin } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MatchMaker",
  description: "Find your perfect match",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <nav className="bg-black text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              MatchMaker
            </Link>
            <div className="space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Github className="w-5 h-5 mr-1" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Twitter className="w-5 h-5 mr-1" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Linkedin className="w-5 h-5 mr-1" />
              </Link>
            </div>
          </div>
        </nav>
        <main className="flex-grow">{children}</main>
        <footer className="bg-black text-white p-4">
          <div className="container mx-auto text-center">
            &copy; {new Date().getFullYear()} Matchmaker. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}

