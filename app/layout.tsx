import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./client-layout"

export const metadata: Metadata = {
  title: "Subrat Sharma - Aspiring Network Engineer | Portfolio",
  description: "Passionate network engineering student with expertise in TCP/IP, routing, switching, and network security. Currently pursuing CCNA and CompTIA Network+ certifications. Based in Delhi, India.",
  keywords: ["Network Engineer", "CCNA", "CompTIA Network+", "TCP/IP", "Routing", "Switching", "Network Security", "Subrat Sharma", "Portfolio"],
  authors: [{ name: "Subrat Sharma" }],
  creator: "Subrat Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://subratsharma.com",
    title: "Subrat Sharma - Aspiring Network Engineer",
    description: "Passionate network engineering student with expertise in TCP/IP, routing, switching, and network security. Currently pursuing CCNA and CompTIA Network+ certifications.",
    siteName: "Subrat Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subrat Sharma - Aspiring Network Engineer",
    description: "Passionate network engineering student with expertise in TCP/IP, routing, switching, and network security.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
