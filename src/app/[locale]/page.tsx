import Link from "next/link";
import {useMessages, useTranslations} from "next-intl";
import {getMessage} from "@/src/lib/common/plugins/messageClient";

export default async function Page(props: { params: { lang: string; }; }) {
    let photos = Array.from({length: 6}, (_, i) => i + 1);
    const t = await getMessage('common-page');
    // const lang = await getDictionary(props.params.lang);
    return (
        <>
            <h1>{t('loggedIn')}</h1>
            <section className="cards-container">
                {photos.map((id) => (
                    <Link className="card" key={id} href={`/photos/${id}`} passHref>
                        {id}
                    </Link>
                ))}
            </section>
            <img src="/hello.png"/>
        </>
    )

}