import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'NEXT MALL',
    description: 'X2BEE MALL FO by Plateer',
    icons: {
        icon: '/favicon.ico',
    },
};
export default function Page() {
  return (
      <>
          <h2>Welcome</h2>
          Hello, Web!
          <img src="/hello.png"/>
      </>
  )
}
