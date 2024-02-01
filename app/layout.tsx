import './globals.css'
import {Metadata} from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: 'NEXT MALL',
    description: 'X2BEE MALL FO by Plateer',
    icons: {
        icon: '/favicon.ico',
    },
};
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
