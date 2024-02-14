import '../globals.css'
import {Metadata} from "next";
import {NextIntlClientProvider, useMessages} from "next-intl";
import {pick} from "lodash";

export default function Layout({
  children,
  modal,
  params: {locale}
}: {
  children: React.ReactNode
    modal: React.ReactNode
    params: {locale: string}
}) {

    const messages = useMessages();
    console.log(messages)
  return (

      // <html lang={locale}>
      // <body>
      <section>
          <NextIntlClientProvider messages={pick(messages, 'Index')}>
        {children}
        {modal}
        <div id="modal-root"/>
          </NextIntlClientProvider>
      </section>
      // {/*</body>*/}
      // {/*</html>*/}
  )
}
