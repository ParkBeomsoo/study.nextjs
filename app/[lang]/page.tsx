import {getDictionary} from "@/dictionary";
import Link from "next/link";

export default async function Page(props: { params: { lang: string; }; }) {
    let photos = Array.from({ length: 6 }, (_, i) => i + 1);
    const lang = await getDictionary(props.params.lang);
    return (
        <>
            <h1>{lang.Index.title}</h1>
            <section className="cards-container">
            {photos.map((id) => (
                <Link className="card" key={id} href={`/photos/${id}`} passHref>
                    {id}
                </Link>
            ))}
            </section>
        </>
    )

}