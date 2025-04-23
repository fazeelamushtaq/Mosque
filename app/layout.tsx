import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    template: "% | MosqueScreen Project by MosqueOS",
    default: "Mosque",
  },
  description: {
    template: "% | MosqueScreen Project by MosqueOS",
    default: "MosqueScreen Project by MosqueOS",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="3600" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
