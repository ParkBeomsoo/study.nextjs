import './globals.css'
import {Metadata} from "next";
import Link from "next/link";

export const metadata:Metadata = {
  title: "Web tutorials",
  description: "Generated by beom"
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
