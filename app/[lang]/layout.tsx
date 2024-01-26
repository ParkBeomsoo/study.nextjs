import '../globals.css'
import {Metadata} from "next";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section>
          {children}
      </section>
  )
}
