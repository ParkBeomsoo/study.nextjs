import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(
): Promise<Metadata> {
    const title = crypto.randomUUID();
    return {
        title: title,
    }
}
export default function Layout({
   children,
   user,
   team,
   params
}: {
  children: React.ReactNode
  user: React.ReactNode
  team: React.ReactNode
  params: {
    lang: string
  }
}) {
    // let page = team
    // if(params.lang == 'ko'){
    //     page = user
    // }

  return (
      <section>
          {children}
          <div className="flex">
              {team}
              {user}
          </div>
      </section>
)
}
