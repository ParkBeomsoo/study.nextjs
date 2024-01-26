import {getDictionary} from "@/dictionary";

export default async function Page(props: { params: { lang: any; }; }) {
    const lang = await getDictionary(props.params.lang);
    console.log(lang)
    return (
        <><h1>{lang.Index.title}</h1><h1>{lang.goods.title}</h1><h1>{lang.order.title}</h1></>
    )

}