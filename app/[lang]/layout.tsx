import '../globals.css'
import {Metadata} from "next";

export default function Layout({
  children,
  modal
}: {
  children: React.ReactNode
    modal: React.ReactNode
}) {
  return (
      <section>
        {children}
        {modal}
        <div id="modal-root"/>
      </section>
  )
}
