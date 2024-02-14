import {Metadata} from "next";

export async function generateMetadata(
    props: { params: { id: string; }},

): Promise<Metadata> {
  // read route params
  const id = props.params.id

  return {
    title: id,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section>{children}</section>
  )
}
